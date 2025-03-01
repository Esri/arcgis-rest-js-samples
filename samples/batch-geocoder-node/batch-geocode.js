/* Copyright 2025 Esri
 *
 * Licensed under the Apache License Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fs = require("fs");
const Papa = require("papaparse");
const {
  ApiKey,
  ApplicationCredentialsManager
} = require("@esri/arcgis-rest-request");
const { bulkGeocode } = require("@esri/arcgis-rest-geocoding");
const config = require("./config");

// FUNCTIONS!

// Reads a csv file to an array of dictionary rows
const parseCsv = (csvPath) => {
  const readStream = fs.createReadStream(csvPath);
  return new Promise((res, rej) => {
    Papa.parse(readStream, {
      header: true,
      complete: (data, file) => res(data.data),
      error: (er, file) => rej(er)
    });
  });
};

//Writes a csv-style object to filepath
const exportCsv = (output, filePath) => {
  return new Promise((res, rej) => {
    const str = Papa.unparse(output);
    fs.writeFile(filePath, str, (er) => {
      if (er) rej(er);
      res("SUCCESS!");
    });
  });
};

// Format objects in data to conform to request params
// `fields` can be a `string` for address field or an `object` mapping request fields to csv fields
// https://developers.arcgis.com/arcgis-rest-js/api-reference/arcgis-rest-geocoding/IAddressBulk/
const getAddresses = (data, fields) => {
  if (typeof fields === "string") {
    return data.map((row, i) => ({
      OBJECTID: i,
      address: row[fields]
    }));
  }
  return data.map((row, i) => {
    let addressObj = { OBJECTID: i };
    for (let key in fields) {
      addressObj[key] = row[fields[key]];
    }
    return addressObj;
  });
};

// Chunks an array to max batch geocode limit of 1000
// Copied from https://github.com/Chalarangelo/30-seconds-of-code#chunk
const chunkGeocode = (arr) =>
  Array.from({ length: Math.ceil(arr.length / 1000) }, (v, i) =>
    arr.slice(i * 1000, i * 1000 + 1000)
  );

// Translates array of batch geocode request results to IDs mapped to geocode locations
const mapResults = (results) =>
  results.reduce((resMap, res) => {
    const locations = res.locations;
    return locations.reduce((locMap, loc) => {
      const locFields = {};
      locFields["x"] = loc.location.x;
      locFields["y"] = loc.location.y;
      // ref: https://developers.arcgis.com/rest/geocode/api-reference/geocoding-service-output.htm#ESRI_SECTION1_42D7D3D0231241E9B656C01438209440
      locFields["geocode_score"] = loc.score;
      locFields["match_type"] = loc.attributes.Addr_type;
      locMap[loc.attributes.ResultID] = locFields;
      return locMap;
    }, resMap);
  }, {});

// IMPLEMENTATION!

// Instantiate an ApplicationCredentialsManager to run Geocoding service
const session = ApplicationCredentialsManager.fromCredentials({
  clientId: config.clientId,
  clientSecret: config.clientSecret
});

// Parse and geocode
parseCsv(config.csv)
  .then((data) => {
    // Build address requests
    const addrs = getAddresses(data, config.fieldmap);
    const chunks = chunkGeocode(addrs, 1000);

    // Geocode
    const promises = chunks.map((chunk) =>
      bulkGeocode({
        addresses: chunk,
        authentication: session
      })
    );

    // Resolve results and combine with CSV data
    return Promise.all(promises).then((res) => {
      resultMap = mapResults(res);
      output = data.map((row, i) => {
        id = row[config.fieldmap.OBJECTID] || i;
        return { ...row, ...resultMap[id] };
      });
      return output;
    });
  })
  .then((output) => {
    // Write the new CSV
    return exportCsv(output, config.output);
  })
  .then((success) => console.log(success))
  .catch((er) => console.log(er));

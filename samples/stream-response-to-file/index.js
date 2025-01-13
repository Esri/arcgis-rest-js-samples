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
const { queryFeatures } = require("@esri/arcgis-rest-feature-service");
const fs = require("fs");

const outFileName = `./output/${Date.now()}.geojson`;
const outFile = fs.createWriteStream(outFileName);
const serviceUrl =
  "https://services.arcgis.com/uUvqNMGPm7axC2dD/arcgis/rest/services/Boating_Access_Sites/FeatureServer/0/query";

// const params = {
//   outSR: "4326",
//   returnGeometry: true,
//   f: "geojson"
// };

queryFeatures({
  url: serviceUrl,
  outSR: "4326",
  returnGeometry: true,
  f: "geojson",
  rawResponse: true
})
  .then((resp) => {
    //Access any response methods, or ReadableStream body
    //https://developer.mozilla.org/en-US/docs/Web/API/Response
    const stream = resp.body;
    stream.pipe(outFile);
    stream.on("data", (data) => {
      console.log("Buffering: ", data);
    });
    stream.on("end", () => {
      console.log(`Finished: ${outFileName}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

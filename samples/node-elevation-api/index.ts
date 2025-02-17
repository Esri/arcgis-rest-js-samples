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
import { ApiKeyManager } from "@esri/arcgis-rest-request";
import {
  findElevationAtPoint,
  findElevationAtManyPoints,
} from "@esri/arcgis-rest-elevation";
import * as dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const authentication = ApiKeyManager.fromKey(process.env.API_KEY as string);

const atPointResponse = await findElevationAtPoint({
  lon: -3.1883,
  lat: 55.9533,
  relativeTo: "ellipsoid",
  authentication,
});

fs.promises.writeFile(
  "./atPoint.mock.json",
  JSON.stringify(atPointResponse, null, 2)
);

console.log("Found elevation for atPoint (ellipsoid):", atPointResponse);

const atPointDefaultResponse = await findElevationAtPoint({
  lon: -3.1883,
  lat: 55.9533,
  authentication,
});

fs.promises.writeFile(
  "./atPointDefault.mock.json",
  JSON.stringify(atPointDefaultResponse, null, 2)
);

console.log(
  "Found elevation for atPoint (mean sea level):",
  atPointDefaultResponse
);

const atManyPointsDefaultResponse = await findElevationAtManyPoints({
  coordinates: [
    [1.2, 3.4],
    [1.23, 3.45],
  ],
  authentication,
});

fs.promises.writeFile(
  "./atManyPointsDefault.mock.json",
  JSON.stringify(atManyPointsDefaultResponse, null, 2)
);

console.log(
  "Found elevation for atManyPoints (mean sea level):",
  atManyPointsDefaultResponse
);

const atManyPointsEllipsoidResponse = await findElevationAtManyPoints({
  coordinates: [
    [1.2, 3.4],
    [1.23, 3.45],
  ],
  relativeTo: "ellipsoid",
  authentication,
});

fs.promises.writeFile(
  "./atManyPointsEllipsoid.mock.json",
  JSON.stringify(atManyPointsEllipsoidResponse, null, 2)
);

console.log(
  "Found elevation for atManyPoints (ellipsoid):",
  atManyPointsEllipsoidResponse
);

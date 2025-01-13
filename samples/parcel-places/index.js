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
import { authentication } from "./auth.js";
import { findPlacesNearPoint } from "@esri/arcgis-rest-places";

(async () => {
  let lastResponse = await findPlacesNearPoint({
    x: -74.00731801986696,
    y: 40.71120251262453,
    radius: 400,
    categoryIds: [13000],
    pageSize: 20,
    authentication
  });

  let allPlaces = lastResponse.results;

  while (lastResponse.nextPage) {
    lastResponse = await lastResponse.nextPage();
    allPlaces = allPlaces.concat(lastResponse.results);
  }

  console.log(allPlaces.length, allPlaces);
})();

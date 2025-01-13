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
/**
 * Bring in searchItems fn
 */
const { searchItems } = require("@esri/arcgis-rest-portal");

module.exports = {
  /**
   * Execute the command
   */
  execute: function (query) {
    // construct the search call..
    return searchItems({
      q: query,
      start: 1,
      num: 10
    })
      .then((response) => {
        // if we got results
        if (Array.isArray(response.results) && response.results.length) {
          console.info(`${response.total} items found for "${query}".`);
          response.results.forEach((entry) => {
            console.info(`${entry.id} | ${entry.title}`);
          });
        } else {
          console.info(`No results found for "${query}".`);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

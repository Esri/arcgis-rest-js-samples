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
module.exports = {
  clientId: "[public]",
  clientSecret: "[secret]",
  csv: "NYC_Restaurant_Inspection_Results.csv",
  output: "NYC_Restaurant_Inspection_Results_Geocoded.csv",
  fieldmap: {
    address: "ADDRESS",
    // "address2": "<csv field>",
    // "address3": "<csv field>",
    city: "BORO",
    // "countryCode": "<csv field>",
    // "neighborhood": "<csv field>",
    postal: "ZIPCODE"
    // "postal Ext": "<csv field>",
    // "region": "STATE",
    // "subregion": "<csv field>"
  }
};

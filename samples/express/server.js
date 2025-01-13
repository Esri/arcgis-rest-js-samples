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
const express = require("express");
const app = express();
const { ArcGISIdentityManager } = require("@esri/arcgis-rest-request");
const { clientId } = require("./config.json");

const credentials = {
  clientId,
  redirectUri: "http://localhost:3000/authenticate",
  expiration: 10
};

app.get("/authorize", function (req, res) {
  // send the user to the authorization screen
  ArcGISIdentityManager.authorize(credentials, res);
});

// the after authorizing the user is redirected to /authenticate
app.get("/authenticate", function (req, res) {
  if (credentials) {
    // the user will be redirected with an authorization code we will need to exchange for tokens.
    // After exchanging we will have a ArcGISIdentityManager we can use in REST JS.
    ArcGISIdentityManager.exchangeAuthorizationCode(credentials, req.query.code)
      .then((session) => {
        console.log(session);
        // get the users info
        return session.getUser();
      })
      .then((user) => {
        // send the info to the browser
        res.send(`<pre>${JSON.stringify(user, null, 2)}</pre>`);
      });
  } else {
    res.send("please visit http://localhost:3000/authorize");
  }
});

app.listen(3000, function () {
  console.log("visit http://localhost:3000/authorize to test the application!");
});

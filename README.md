# ArcGIS REST JS Samples

## Local ArcGIS REST JS

If you'd like to use a local version of ArcGIS REST JS while running one of the samples, follow these steps.

### Local ArcGIS REST JS (NPM)

For samples that use NPM to install ArcGIS REST JS as a dependency, follow these steps.

1. In the ArcGIS REST JS directory, run these commands:

   ```bash
   npm install
   npm run build
   ```

2. In this sample's directory, run these commands,

   1. Replacing `..\..\path\to` with the path to where you have ArcGIS REST JS stored, and
   2. Using the associated package folder(s) that are being used by the current sample (e.g. `packages\arcgis-rest-feature-service`, `packages\arcgis-rest-geocoding`, etc.)

   ```bash
   npm install
   npm link ..\..\path\to\arcgis-rest-js\packages\arcgis-rest-feature-service\
   ```

Remember that you must run `npm run build` in the ArcGIS REST JS repository after making changes to see those changes when running the sample.

To remove the link and use the package from NPM instead of the local one, run `npm install` in the sample folder again.

### Local ArcGIS REST JS (Browser)

For samples that use a `<script>` tag to reference ArcGIS REST JS in the browser, follow these steps.

1. In the ArcGIS REST JS directory, run these commands. This will run a local server hosting ArcGIS REST JS.

   ```bash
   npm install
   npm run build
   node .\scripts\run-demo-server.js
   ```

2. In this sample's directory, in the HTML file code, change the `<script>` tag(s) from `https://unpkg.com` to `https://localhost:8080` (or whatever port is used in step 1). For example, change this:

   ```html
   <script src="https://unpkg.com/@esri/arcgis-rest-feature-service/dist/bundled/feature-service.umd.js"></script>
   ```

   ... to this:

   ```html
   <script src="https://localhost:8080/@esri/arcgis-rest-feature-service/dist/bundled/feature-service.umd.js"></script>
   ```

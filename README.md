# ArcGIS REST JS Samples

## Local ArcGIS REST JS

If you'd like to use a local version of ArcGIS REST JS while running one of the samples, follow these steps.

1. In the ArcGIS REST JS directory, run these commands:

   ```bash
   npm install
   npm run build
   ```

1. In this sample's directory, run these commands,

   1. Replacing `..\..\path\to` with the path to where you have ArcGIS REST JS stored, and
   2. Using the associated package folder(s) that are being used by the current sample (e.g. `packages\arcgis-rest-feature-service`, `packages\arcgis-rest-geocoding`, etc.)

   ```bash
   npm install
   npm link ..\..\path\to\arcgis-rest-js\packages\arcgis-rest-feature-service\
   ```

Remember that you must run `npm run build` in the ArcGIS REST JS repository after making changes to see those changes when running the sample.

To remove the link and use the package from NPM instead of the local one, run `npm install` in the sample folder again.

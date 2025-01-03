# Stream Response to File

Demonstrates using ReadableStream to save results from a query to a file. Features from <https://services.arcgis.com/uUvqNMGPm7axC2dD/arcgis/rest/services/Boating_Access_Sites/FeatureServer/0> will be written in GeoJSON format to a file in the `output` directory.

## Running this sample

1. Run `npm install` to install the dependencies.
1. Run `npm start`.

### Local ArcGIS REST JS

If you'd like to use a local version of ArcGIS REST JS, follow the [steps in the parent README](../README.md#local-arcgis-rest-js-npm), referencing these packages that this sample uses as necessary:

- `arcgis-rest-request`
- `arcgis-rest-feature-service`

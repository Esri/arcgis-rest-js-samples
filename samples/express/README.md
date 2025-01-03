# ArcGIS REST JS Express Demo

This sample shows how to trigger OAuth 2.0 via custom server-side code.

## Running this sample

1. In this sample's directory, run `npm install` to install the dependencies.
2. Create a new application on <https://developers.arcgis.com> (New Item > Developer Credentials > OAuth 2.0 credentials).
3. Add `http://localhost:3000/authenticate` as a redirect uri for your application.
4. Copy the `config.json.template` file, rename it to `config.json`.
5. Copy your application's client ID into your new `config.json` file.
6. In the terminal, run `npm start`.
7. Visit <http://localhost:3000/authorize> to start the OAuth 2.0 process.

### Local ArcGIS REST JS

If you'd like to use a local version of ArcGIS REST JS, follow the [steps in the parent README](../README.md#local-arcgis-rest-js-npm), referencing these packages that this sample uses as necessary:

- `arcgis-rest-request`
- `arcgis-rest-developer-credentials`

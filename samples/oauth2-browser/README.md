# ArcGIS Rest JS / Vanilla JS Demo

This demo uses Vanilla JS to implement OAuth2 using the `arcgis-rest-js` libraries.

See the ArcGIS Rest JS guide to [Authentication in Browser-based Apps](https://developers.arcgis.com/arcgis-rest-js/authentication/tutorials/implement-user-authentication-rest-js-browser/) for more info.

## Running this sample

1. [Register an app](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/tutorials/register-your-application/) and copy the Client ID.
1. [Add redirect URIs](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/tutorials/add-redirect-uri/) for `http://localhost:3000` (for inline redirects) and `http://localhost:3000/authentication.html` (for popup redirects) to your registered application.
1. Copy `config.template.ts` to `config.ts` and replace the `clientId` with the Client ID from step 1.
1. Run `npx serve` in this directory to spin up the development server.
1. Visit [http://localhost:3000](http://localhost:3000).

### Local ArcGIS REST JS

If you'd like to use a local version of ArcGIS REST JS, follow the [steps in the parent README](../README.md#local-arcgis-rest-js-browser), updating the script tags in these files as necessary:

- `index.html`
- `authenticate.html`

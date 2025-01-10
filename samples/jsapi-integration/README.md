# Passing authentication to the JSAPI

This demo shows how to use `arcgis-rest-js` with the ArcGIS API for JavaScript. A typical use case would be when you need to query items or feature data _before_ you are ready to display a map or scene view. In this scenario, you should load the light-weight `arcgis-rest-js` libraries first and use them to perform your queries and/or authenticate with the ArcGIS platform. Then when you are ready to show a map or scene view, you would lazy-load the ArcGIS API for JavaScript with something like [esri-loader](https://github.com/Esri/esri-loader) and use it to create the map.

## Running this sample

1. [Register an app](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/tutorials/register-your-application/) and copy the Client ID.
1. [Add redirect URIs](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/tutorials/add-redirect-uri/) for `http://localhost:3000`.
1. Copy `config.template.ts` to `config.ts` and replace the `clientId` with the Client ID from step 1.
1. Run `npx serve` in this directory to spin up the development server.
1. Visit [http://localhost:3000](http://localhost:3000).

### Local ArcGIS REST JS

If you'd like to use a local version of ArcGIS REST JS, follow the [steps in the parent README](../README.md#local-arcgis-rest-js-browser), updating the script tags in these files as necessary:

- `index.html`
- `authenticate.html`

## Notable code

```js
// from rest-js
const session = new ArcGISIdentityManager(/* */);

// ensure that our session has a token
session.getToken("https://www.arcgis.com/sharing/rest").then(() => {
  esriId.registerToken(session.toCredential()); // JSAPI Identity Manager
});

// from jsapi
esriId.getCredential("https://www.arcgis.com/sharing/rest").then((cred) => {
  const serverInfo = esriId.findServerInfo(
    "https://www.arcgis.com/sharing/rest"
  );
  const session = ArcGISIdentityManager.fromCredential(cred, serverInfo);
});
```

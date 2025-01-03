# Passing authentication to the JSAPI

This demo shows how to use `arcgis-rest-js` with the ArcGIS API for JavaScript. A typical use case would be when you need to query items or feature data _before_ you are ready to display a map or scene view. In this scenario, you should load the light-weight `arcgis-rest-js` libraries first and use them to perform your queries and/or authenticate with the ArcGIS platform. Then when you are ready to show a map or scene view, you would lazy-load the ArcGIS API for JavaScript with something like [esri-loader](https://github.com/Esri/esri-loader) and use it to create the map.

## Running this demo

For this sample, you do not need to install any dependencies - it uses ArcGIS REST JS from the Unpkg CDN. To run this sample, you just need to host the `index.html` file. There are a variety of ways to do that; one simple way is to use the [serve](https://www.npmjs.com/package/serve) package:

```bash
npx serve
```

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

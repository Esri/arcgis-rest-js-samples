# Geocode (Browser)

## Running this demo

For this sample, you do not need to install any dependencies - it uses ArcGIS REST JS from the Unpkg CDN. To run this sample, you just need to host the `index.html` file. There are a variety of ways to do that; one simple way is to use the [serve](https://www.npmjs.com/package/serve) package:

1. Register a new app on <https://developers.arcgis.com>
2. Add a redirect URL of `http://localhost:3000` to your app.
3. Copy the `config.js.template` file, rename it to `config.js`
4. Copy your app's client id into your new `config.js` file.
5. In the terminal, run `npx serve`
6. Visit <https://localhost:3000> and click "Sign In" to start the OAuth 2.0 process.
7. Start clicking buttons to send off authenticated geocoding requests.

### Local ArcGIS REST JS

If you'd like to use a local version of ArcGIS REST JS, follow the [steps in the parent README](../README.md#local-arcgis-rest-js-browser), updating the script tags in these files as necessary:

- `index.html`
- `authenticate.html`

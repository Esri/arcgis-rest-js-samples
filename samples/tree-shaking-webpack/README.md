# Tree Shaking - Webpack

This demo shows how to have webpack [tree shake](https://rollupjs.org/guide/en#tree-shaking) `@esri/rest-js` and only include methods that are actually being called in its output bundle.

## Running this demo

1. Run `npm install` to install the dependencies.
1. Run `npm run build:app` this will also generate a `stats.json` file
1. Load `index.html` in a web browser and confirm you see output.
1. Run `npm run analyze-bundle` which will open the bundle analyzer. You should only see `request` and `search` related modules.

### Local ArcGIS REST JS

If you'd like to use a local version of ArcGIS REST JS, follow the [steps in the parent README](../README.md#local-arcgis-rest-js-npm), referencing these packages that this sample uses as necessary:

- `arcgis-rest-request`

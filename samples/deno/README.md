# ArcGIS REST JS + Deno

## Running this sample

ArcGIS REST JS is fully compatible with Deno. You can run this demo with:

```
deno run --allow-net --allow-import --import-map ./import_map.json index.js
```

### Local ArcGIS REST JS

If you'd like to use a local version of ArcGIS REST JS, follow these steps.

1. In the ArcGIS REST JS directory, run these commands. This will run a local server hosting ArcGIS REST JS.

```bash
npm install
npm run build
node .\scripts\run-demo-server.js
```

2. In this sample's directory, update `import_map.json` with relative paths to the files on your computer. For example replace this:

```json
"https://esm.run/@esri/arcgis-rest-form-data/browser-ponyfill.mjs"
```

... with this:

```json
"../../path/to/arcgis-rest-js/packages/arcgis-rest-form-data/browser-ponyfill.mjs"
```

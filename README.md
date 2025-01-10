# ArcGIS REST JS Samples

This repository contains a variety of samples of different ways to use [ArcGIS REST JS](https://github.com/Esri/arcgis-rest-js). Please see the [samples folder](samples/) for the entire list. Each sample has a README file to explain how to run the sample.

## Local ArcGIS REST JS

If you'd like to use a local version of ArcGIS REST JS while running one of the samples, follow these steps.

### Local ArcGIS REST JS (NPM)

For samples that use NPM to install ArcGIS REST JS as a dependency, follow these steps.

1. In the ArcGIS REST JS repo run any relevant build commands for the packages with which you are working.
1. In the terminal, `cd` onto the package you want to link. E.g. `cd packages/arcgis-rest-request`.
1. Run `npm link`.
1. In this repo, `cd` into the demo you want to run and run the `npm link` command for the package you want to link. `npm link @esri/arcgis-rest-request`

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

## Sample Repository Maintenance

In order to not need to constantly update the packages, we are not including `package-lock.json` files within samples the use NPM to install dependencies. See [.gitignore](.gitignore).

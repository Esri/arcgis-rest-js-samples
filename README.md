# ArcGIS REST JS Samples

This repository contains a variety of samples of different ways to use [ArcGIS REST JS](https://github.com/Esri/arcgis-rest-js). Please see the [samples folder](samples/) for the entire list. Each sample has a README file to explain how to run the sample.

## Features

- Samples for ArcGIS REST JS project

## Instructions

Each sample is contained in a directory within the `samples` directory.

1. Fork or clone the repo.
2. In a terminal, `cd` into a sample folder. E.g. `cd samples/attachments-node`.
3. Follow the steps in the `Running this sample` in the `README.md` file within that folder.

### Local ArcGIS REST JS

If you'd like to use a local version of ArcGIS REST JS while running one of the samples, follow these steps.

#### Local ArcGIS REST JS (NPM)

For samples that use NPM to install ArcGIS REST JS as a dependency, follow these steps.

1. In the ArcGIS REST JS repo run any relevant build commands for the packages with which you are working.
1. In the terminal, `cd` onto the package you want to link. E.g. `cd packages/arcgis-rest-request`.
1. Run `npm link`.
1. In this repo, `cd` into the demo you want to run and run the `npm link` command for the package you want to link. `npm link @esri/arcgis-rest-request`

Remember that you must run `npm run build` in the ArcGIS REST JS repository after making changes to see those changes when running the sample.

To remove the link and use the package from NPM instead of the local one, run `npm install` in the sample folder again.

#### Local ArcGIS REST JS (Browser)

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

### Sample Repository Maintenance

In order to not need to constantly update the packages, we are not including `package-lock.json` files within samples the use NPM to install dependencies. See [.gitignore](.gitignore).

## Requirements

The requirements are different depending on the sample. Please refer to the `README.md` file within each sample folder.

## Resources

- [ArcGIS REST JS Documentation](https://developers.arcgis.com/arcgis-rest-js/)
- [ArcGIS REST JS GitHub](https://github.com/Esri/arcgis-rest-js)

## Issues

Find a bug or want to request a new feature? Please let us know by submitting an issue.

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing

Copyright 2025 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](hLICENSE.txt) file.

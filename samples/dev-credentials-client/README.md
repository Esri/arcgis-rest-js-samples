# Client Web Demo for Developer Credential Package

This page will show API key and OAuth 2.0 app CRUD demo with help of `arcgis-rest-developer-credentials` package. First
step requires a user to log in
via [Authenticate with an ArcGIS identity](https://developers.arcgis.com/arcgis-rest-js/authentication/tutorials/sign-in-with-user-authentication-browser/).
Then you can use the form to create an API key or switch to the OAuth 2.0 form to create an OAuth 2.0 app.
Once you've created an API key or OAuth 2.0 app, you can click on the item in the table below the form to edit it.

## Running this demo

First run `npm install` to install the dependencies.

### Local ArcGIS REST JS

If you'd like to use a local version of ArcGIS REST JS, follow the [steps in the parent README](../README.md#local-arcgis-rest-js-npm), referencing these packages that this sample uses as necessary:

- `arcgis-rest-request`
- `arcgis-rest-developer-credentials`

## Additional tools used

| Description           | Tool                                        |
| --------------------- | ------------------------------------------- |
| Enhanced Multi-Select | [Select2](https://select2.org)              |
| Table                 | [jQuery Data Table](https://datatables.net) |
| Others                | jQuery 3, Bootstrap 5                       |

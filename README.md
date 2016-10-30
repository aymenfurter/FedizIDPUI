# Fediz IDP UI

This software is in Proof of Concept state! Any liability is excluded. Use on your own risk.

A User Interface for the Apache CXF Fediz IDP Rest Interface based on Angular 2, SB-Admin 2, Twitter Bootstrap and TypeScript.

Known Issues:

    - Login not yet fully implemented / working.
    - Data does not getting refreshed consistently.

## Preview
![alt tag](http://aymenfurter.ch/idpui1.png)
![alt tag](http://aymenfurter.ch/idpui2.png)
![alt tag](http://aymenfurter.ch/idpui3.png)

## Development server
The app needs to be built using the command "npm install". After that, it expects to be run on an application server having fediz idp installed at in the context fediz-idp.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/route/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

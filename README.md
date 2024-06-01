# KamiTestApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

## Technologies and Libraries Used

- **Styling**: Bootstrap
- **Select Element**: ng-select module
- **Icons**: Font Awesome
- **Code Quality**: ESLint

## Installation

To include Bootstrap for styling in your Angular app, follow these steps:

1. **Install Bootstrap**: Run the following command to install Bootstrap:
    ```bash
    npm install bootstrap

    In angular.json file insert a new entry into the styles array to apply styles:
        "./node_modules/bootstrap/dist/css/bootstrap.min.css",

To install the ng-select module for enhanced select elements in your Angular app, follow these steps:

2. **Install @ng-select/ng-select**: Run the following command to install the ng-select module:
    ```bash
    npm install --save @ng-select/ng-select@12

    In styles.css file import styles for ng-select module to apply styles:
        @import "@ng-select/ng-select/themes/material.theme.css";

To install Font Awesome for using icons in your Angular app, follow these steps:

3. Install @fortawesome/angular-fontawesome**: Run the following command to install the Angular Font Awesome package:
   ```bash
   npm install @fortawesome/angular-fontawesome@0.14

## Code Quality Checks

To ensure code quality and maintain consistency, ESLint is used in this project. Follow the steps below to set up ESLint:

**Install @angular-eslint/schematics**: Run the following command to install the necessary package:
    ```bash
    npm install @angular-eslint/schematics@17.5 --save-dev
    Run `ng lint`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

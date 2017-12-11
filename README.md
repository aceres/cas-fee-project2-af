# Schulprojekt: Projekt 2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## Manual

We have the folder structure for the documentation, see the folder:

`
/doc/..
`

#### json
`/doc/json`

Analysis for the JSON, Testing with CURLs (POST, PUT)

#### meeting
`/doc/meeting`

Our meeting protocols - all 2 - 3 weeks.

#### screenshots
`/doc/screenshots`

Screenshots of our current web application.

#### wireframes
`/doc/wireframes`

Mockups for our web application

#### configuration
`/doc/configuration.md`

Configurations and Settings for this web application

#### experience
`/doc/experience.md`

Experience and reasons for the problem with links

#### todos
`/doc/todo.md`

Must have and optional tasks for our applications (requirements)

###

## Installation (on your local machine)

Note: Make sure that you are connected with Internet.
Be aware that you also have Git and NodeJS on your machine installed.

### Clone the web application from the Repo

`
git clone https://github.com/aceres/cas-fee-project2-af
`

### Change the directory for starting the web application

`
cd cas-fee-project2-af
`

### Run the web application
`
npm run start
`
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Run the unit tests
`
npm run test
`

## Development server (Address Information)

Firebase (Real Database and Hosting)
`
https://console.firebase.google.com/project/project2-60db1/overview
`
Web
`
https://project2-60db1.firebaseapp.com/public
`

## Production server (Address Information)

Firebase (Real Database and Hosting)
`
https://console.firebase.google.com/project/manducare-v1/overview
`
Web
`
https://manducare-v1.firebaseapp.com/public
`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build for the development on firebase host

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Build for the development on firebase host

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
Use the `-prod` flag for a production build.

Note: 

After running this command: `ng build -prod --aot=false` and deploying the build `dist` directory to the
firebase host, the setting is not oriented to the production.

Therefore we need to change the setting manually for deploying to the production host:

`
/src/environment/environment.ts
`

Use this configuration for this file below:

`export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyBfCNtrWk37h4lqm28Toes6e5efVY1eJyQ',
    authDomain: 'manducare-v1.firebaseapp.com',
    databaseURL: 'https://manducare-v1.firebaseio.com',
    projectId: 'manducare-v1',
    storageBucket: 'manducare-v1.appspot.com',
    messagingSenderId: '391938033267'
  },
  apiUrl: 'https://manducare-v1.firebaseio.com/'
};`

See reasons in the file: experience.md:

`
ng build --prod (mode)
`
* https://github.com/angular/angular-cli/issues/7118 (Switch to prod)
* https://github.com/angular/angular-cli/issues/7113
* https://github.com/angular/angular-cli/issues/7138

## Running unit tests

Run:
`
npm run test
`
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

It is not implemented yet.
Run: 
`
npm run e2e
`
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

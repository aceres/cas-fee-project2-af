![Manducare](src/assets/img/logo.png?raw=true "Manducare")

# Projekt 2: www.manducare.ch :yum:

This project for the final exam of CAS Frontend Engineering at the Hochschule in Rapperswil was implemented by
Tanja Sennhauser and André Ceres. The web application is optimized for Chrome, Safari, IE Edge and Mobile Browser.

## CLI tool for Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

The Angular CLI makes it easy to create an application that already works, right out of the box.

## Manual

There is a folder: `/doc/..` for the documentation.

:open_file_folder: `/doc/json/..`

Analysis for the JSON, Testing with CURLs (POST, PUT, ...).

:open_file_folder: `/doc/meeting/..`

Our meeting protocols were all 2 - 3 weeks (shared status).

:open_file_folder: `/doc/screenshots/..`

Screenshots of our current web application (Desktop and mobile version).
Flow for the login process (pdf).

:open_file_folder: `/doc/wireframes/..`

Wireframes (Mockups) for our web application and the Manduare Style Guide.

:open_file_folder: `/doc/configuration.md`

Configurations, deployments and settings for the development of this project.

:open_file_folder: `/doc/experience.md`

Experience and reasons for the problem including links.

:open_file_folder: `/doc/todo.md`

Must have requirements and optional tasks for our project.

:open_file_folder: `/doc/testing/usability/test-cases.pdf`

Test cases for our web application.

###

## Installation for local use and development

:exclamation: Note: Make sure that you are connected with Internet. You also need [Git](https://git-scm.com/downloads) and [NodeJS](https://nodejs.org/en/download/) on your machine installed.

### Clone the repository from the GitHub

`
git clone https://github.com/aceres/cas-fee-project2-af
`

### Switch the directory for starting the web application

`
cd cas-fee-project2-af
`

### Run the web application

`
npm run start
`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Demo (Login)

User: demo@hsr.ch

Password: :fu:

(Write us via e-mail: info@manducare.ch for getting the password of the demo login)

## Development

### Run the unit tests

`
npm run test
`

## Development server (Address Information)

Firebase (Real Database and Hosting)

`
https://console.firebase.google.com/project/project2-60db1/overview
`

Web App on Development Modus

`
https://project2-60db1.firebaseapp.com/public
`

## Production server (Address Information)

Firebase (Real Database and Hosting)

`
https://console.firebase.google.com/project/manducare-v1/overview
`

Web App on Production Modus

`
https://manducare-v1.firebaseapp.com/public
`

or

`
http://www.manducare.ch
`

## Build it for the development modus on firebase host

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Build it for the production modus on firebase host

Run `ng build -prod --aot=false` to build the project. The build artifacts will be stored in the `dist/` directory. 

Note: 

After running this command: `ng build -prod --aot=false` the environment setting will not be oriented for the production. :flushed:

Therefore we need to change the setting manually for deploying with correct setting to the production host:

`
/src/environment/environment.ts
`

Use this configuration for the file above manually:

```
export const environment = {
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
};
```

and run this before to deploy on the firebase production host:

`ng build -prod --aot=false`

:thumbsup:

Problem: Switching to prod with `ng build --prod`

:exclamation: See also reasons for the bug in the file: `/doc/experience.md`

* [Issue 1](https://github.com/angular/angular-cli/issues/7118)
* [Issue 2](https://github.com/angular/angular-cli/issues/7113)
* [Issue 3](https://github.com/angular/angular-cli/issues/7138)

## Running unit tests

`
npm run test
`

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

:exclamation: It is not implemented yet.

`
npm run e2e
`

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Web Application structure

### admin

The scope for the admin like: view-login, view-list, view-search, ...

### global

The scope for getting the static list like 'simple', 'medium' and 'difficult' of the cooking level.

### ngx

The scope of [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/getting-started). We use alert and modal components.

### pipes

The scope of collected pipes.

### public

The scope for the public like: view-search, view-register, view-page, view-footer, view-detail...

### services

The scope for services, models and global error.

### assets

:open_file_folder: `/assets/flaticon/..`

We use FlatIcon for this project.

:open_file_folder: `/assets/img/..`

There are collected images to see.

:open_file_folder: `/assets/javascript/..`

All JavaScript files are to see in this folder

:open_file_folder: `/assets/js/..`

Speical JavaScript files for IE10 bugs.

:open_file_folder: `/assets/stylesheet/..`

All stylesheet files.

## Notification (Growl)

Notification will appears:

### Register

* When a user has been successful registered
* When the register has been failed
* When a user identification already exists

### Login

* When a login password is not correct
* When a login user does not exists
* When the network request problem occurs
* When a user has been logged in
* Wheh a user has logged out

### Recipe

* When a recipe has been created by a user
* When a recipe has been updated by a user
* When a recipe has been deleted by a user
* When the picture is missed after clicking saving new recipe in the add form

:exclamation: Note: When a user change the picture in the edit form and after clicking saving in the edit form the old picture will be removed from the file storage (Firebase)

### Favorite

* When a favorite has been added by a user
* When a favorite has been removed by a user

### Voting

* When a user has voted a recipe

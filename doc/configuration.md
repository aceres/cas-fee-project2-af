# Configuration (with documentation)

## GitHub for the project 2

[GitHub-Project-2](https://github.com/aceres/cas-fee-project2) (from June 2017) - See the problem into at: `/doc/experience.md`

[GitHub-Project-2](https://github.com/aceres/cas-fee-project2-af) (from November 2017) - use this for the development

## Angular CLI

[Angular CLI](https://github.com/angular/angular-cli)

### Installation of Angular CLI

`npm install -g @angular/cli`

`
ng new project2
`

`
cd project2
`

`
ng serve
`

Navigate to http://localhost:4200/.

## The official Angular library for Firebase

[AngularFire2](https://github.com/angular/angularfire2)

### Installation of AngularFire2

`npm install firebase angularfire2 --save`

### More dependencies for the web app project with Firebase

For the authentication:

`npm install promise-polyfill --save-exact`

[Firebase Auth AngularFire2](https://alligator.io/angular/firebase-authentication-angularfire2/)

## Style Framework / Component - Native Angular Directive

We use [Bootstrap 3.3](https://getbootstrap.com/docs/3.3/) for the basis layout.
No [PrimeNG](https://www.primefaces.org/primeng/#/) anymore! We've uninstalled it. It was in the phase of PoC (Proof of concept).

We use [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/getting-started) as native Angular directive instead (Modals and Alerts).

### Installation of PrimeNG

`npm install primeng --save`

:exclamation: Note: This has been uninstalled!
`npm uninstall primeng -S --save`

### Installation of ngx-bootstrap

`npm install ngx-bootstrap --save`

## Firebase

[Firebase](https://firebase.google.com)

### Firebase Console

[Firebase Console](https://console.firebase.google.com/?pli=1)

### Configuration

Project name: project2

Country: Switzerland

Administration GUI: [Firebase Admin GUI](https://console.firebase.google.com/project/project2-60db1/overview)

#### Real Database

URL: [RealDatabase](https://project2-60db1.firebaseio.com/)

#### Setup Hosting for the Development

`npm install -g firebase-tools`

Domain: [Domain](https://project2-60db1.firebaseapp.com/) (Type: Default)

Go to the local workspace directory: `../project2/..`

`../projects/project2`

`ng build`

Find the directory then: `../project2/dist/`

Login to your Firebase account:

`firebase login`

(Allow Firebase to collect anonymous CLI usage information? Yes)
(Firebase CLI Login Successful)

`firebase init`

Default Firebase project for this directory: `../project2/` (project2-60db1)

a) Writing configuration info to firebase.json...
b) Writing project information to .firebaserc...

(Firebase initialization complete!)

The CLI will ask what folder to use as the public directory. For our project we want to use the dist/ directory instead of Firebase's default public/ directory. So type in the command line dist.

a) What do you want to use as your public directory? dist/
b) Configure as a single-page app (rewrite all urls to /index.html)? Yes
c) File dist//index.html already exists. Overwrite? No
d) Skipping write of dist//index.html

`firebase deploy`

or (`firebase deploy --only hosting`)

Deploying to 'project2-60db1'...
i  deploying hosting
i  hosting: preparing dist/ directory for upload...
✔  hosting: 8 files uploaded successfully
i  starting release process (may take several minutes)...

* [Project Console](https://console.firebase.google.com/project/project2-60db1/overview)
* [Hosting URL](https://project2-60db1.firebaseapp.com)
* [Google Cloud Platform (Dashboard)](https://console.cloud.google.com/home/dashboard?project=project2-60db1)

#### Firebase: Hosting the web application

##### Development

`firebase use`

Active Project: default (project2-60db1)

firebase use default or firebase use project2-60db1

From 15th November: We have a new name for the deployment to firebase host: development (project2-60db1)

* [Web App](https://project2-60db1.firebaseapp.com)
* [Project Console Admin](https://console.firebase.google.com/project/project2-60db1/overview)

##### Production

`firebase use --add`

Created new project:

Project: manducare-v1
Alias project: manducare

`firebase use`

:exclamation: Note: environment.prod.ts is also configured by Angular CLI.

We also can serve in the production environment

`
ng build --prod
`

`firebase deploy`

If AOT errors after building are invoked, you can use instead:

`
ng build --prod --aot=false
`

`
ng build --env=prod --aot=false
`

* [Web App](https://manducare-v1.firebaseapp.com)
* [Firebase Console Admin](https://console.firebase.google.com/project/manducare-v1/overview)

More information about multiple environments:

* [Multiple Environments](https://firebase.googleblog.com/2016/07/deploy-to-multiple-environments-with.html)
* [Issue](https://github.com/angular/angular-cli/issues/5429)

##### Firebase: Permissions for the project

[Permission](https://console.cloud.google.com/iam-admin/iam/project?project=project2-60db1&authuser=0&consoleReturnUrl=https:%2F%2Fconsole.firebase.google.com%2Fproject%2Fproject2-60db1%2Fanalytics&consoleUI=FIREBASE)

### Style Framework / UI library for Angular

:exclamation: Note: No primeNG anymore! We use ngx-bootstrap for our project instead.

The file: angular-cli.json

The adaption of these lines were:

```
"styles": [
  "../node_modules/primeng/resources/primeng.min.css",
  "../node_modules/primeng/resources/themes/omega/theme.css",
  "styles.css"
]
```

Rebuild and reserve the web application then.

`npm uninstall primeng -S --save`

#### ngx-bootstrap

`npm install ngx-bootstrap --save`

#### Installation: font-awesome

FontAwesome was needed for the PrimeNG.
:exclamation: Note: We have uninstalled Awesome because we decided to use FlatIcon for now.

`npm install font-awesome --save`

### Installation of Angular 2 In Memory Web API (Training) - Mock Data

[Angular-In-Memory-Web-API](https://www.npmjs.com/package/angular2-in-memory-web-api)

For the temporary solution. An in-memory web api for Angular demos and tests.
It will intercept HTTP requests that would otherwise go to the remote server via the Angular XHRBackend service.

This package has been de-installed on 10th October 2017. This was used
for the mock data, warm up for beginning Angular 4.

### Installation LESS (CSS pre-processor)

`npm install less --save`

In the config file: `.angular-cli.json`

```
"styles": [
        ...,
        "styles.less"
      ],
"defaults": {
    "styleExt": "less",
    "component": {}
  }
```

### Realtime-Database Rules (Original Version) - Firebase

```
   "rules": {
     ".read": "auth != null",
     ".write": "auth != null"
   }
```

#### Realtime-Database - Our rules

```
{
   "rules": {
     ".read": true,
     ".write": true,
     "recipes": {
       ".indexOn": ["receipt", "uid", "category", "rating"]
     },
     "users": {
			 ".indexOn": ["uid"]
     },
     "favorites": {
			 ".indexOn": ["uid"]
     }
   }
}
```

### Installation of ng2-file-upload (Upload images)

`npm install ng2-file-upload --save`

[ng2-file-upload](https://github.com/valor-software/ng2-file-upload)

### Installation of ngx-pagination (Pagination - for admin only)

`npm install ngx-pagination --save`

[ngx-pagination](https://github.com/michaelbromley/ngx-pagination)

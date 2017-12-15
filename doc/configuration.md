# Configuration

## GitHub for the project 2

[https://github.com/aceres/cas-fee-project2 (from June 2017)]
[https://github.com/aceres/cas-fee-project2-af (from November 2017)]

## Angular CLI

[https://github.com/angular/angular-cli]

### Installation

`
npm install -g @angular/cli
`

`
ng new project2
cd project2
ng serve
`

Navigate to http://localhost:4200/.

## The official Angular library for Firebase

[https://github.com/angular/angularfire2]

### Installation (local)

`
npm install firebase angularfire2 --save
`

## Style Framework

#### NO primeNG Anymore!!! We use ngx-bootstrap

[https://www.primefaces.org/primeng/#/]

### Installation (local)

`
npm install primeng --save
`

(npm uninstall primeng -S --save)

#### ngx-bootstap

`
npm install ngx-bootstrap --save
`

## Firebase

[https://firebase.google.com]

### Firebase Console

[https://firebase.google.com]

[https://console.firebase.google.com/?pli=1]

### Configuration

Project name: project2

Country: Switzerland

Administration GUI: [https://console.firebase.google.com/project/project2-60db1/overview]

#### Real Database

URL: [https://project2-60db1.firebaseio.com/]

#### Setup Hosting for the Development

`
npm install -g firebase-tools
`

Domain: [https://project2-60db1.firebaseapp.com/] (Type: Default)

Go to the directory: project2/

(/Users/andre.ceres/Projects/project2)

`
ng build
`

Go to the directory: project2/dist/

Login to your Firebase account:

`
firebase login
`

(Allow Firebase to collect anonymous CLI usage information? Yes)
(Firebase CLI Login Successful)

`
firebase init
`

Default Firebase project for this directory: project2/ (project2-60db1)

a) Writing configuration info to firebase.json...
b) Writing project information to .firebaserc...

(Firebase initialization complete!)

The CLI will ask what folder to use as the public directory. For our project we want to use the dist/ directory instead of Firebase's default public/ directory. So type in the command line dist.

a) What do you want to use as your public directory? dist/
b) Configure as a single-page app (rewrite all urls to /index.html)? Yes
c) File dist//index.html already exists. Overwrite? No
d) Skipping write of dist//index.html

`
firebase deploy
`
(firebase deploy --only hosting)

Deploying to 'project2-60db1'...
i  deploying hosting
i  hosting: preparing dist/ directory for upload...
✔  hosting: 8 files uploaded successfully
i  starting release process (may take several minutes)...

Project Console: https://console.firebase.google.com/project/project2-60db1/overview
Hosting URL: https://project2-60db1.firebaseapp.com
Google Cloud Platform (Dashboard): https://console.cloud.google.com/home/dashboard?project=project2-60db1

#### Firebase: Deployment

DEVELOPMENT
***********

a) firebase use

Active Project: default (project2-60db1)

firebase use default or firebase use project2-60db1

From 15th November: We have a new name: development (project2-60db1)

PRODUCTION
**********

b) firebase use --add

Created (NEW):
Project: manducare-v1
Alias project: manducare

`
firebase use
`

(Note: environment.prod.ts is configured)

We also can serve in the production environment
`
ng build --prod
`

`
firebase deploy
`

AOT problem -> Errors korrigieren nach ng build --prod!

Otherwise you can use: 
`
ng build --prod --aot=false
ng build --env=prod --aot=false
`

URL Web App: https://manducare-v1.firebaseapp.com
URL Firebase Console Admin: https://console.firebase.google.com/project/manducare-v1/overview

More information:

* https://firebase.googleblog.com/2016/07/deploy-to-multiple-environments-with.html
* https://github.com/angular/angular-cli/issues/5429

#### Firebase: Permissions for project

* https://console.cloud.google.com/iam-admin/iam/project?project=project2-60db1&authuser=0&consoleReturnUrl=https:%2F%2Fconsole.firebase.google.com%2Fproject%2Fproject2-60db1%2Fanalytics&consoleUI=FIREBASE

### More dependencies for this project

For the authentication:

`
npm install promise-polyfill --save-exact
`

URL: https://alligator.io/angular/firebase-authentication-angularfire2/

### Style with primeNG

#### NO primeNG Anymore!!! We use ngx-bootstrap

The file: angular-cli.json

Add these lines:

`
"styles": [
  "../node_modules/primeng/resources/primeng.min.css",
  "../node_modules/primeng/resources/themes/omega/theme.css",
  "styles.css"
]
`

Rebuild and reserve the web application then!

--

(npm uninstall primeng -S --save)

#### ngx-bootstap

`
npm install ngx-bootstrap --save
`

### Installation: font-aewsome (locally and not globally)

FontAwesome is needed for the PrimeNG

`
npm install font-awesome --save
`

We have uninstalled Awesome because we decided to use FlatIcon for now.

### Installation

https://www.npmjs.com/package/angular2-in-memory-web-api

For the temporary solution. An in-memory web api for Angular demos and tests.
It will intercept HTTP requests that would otherwise go to the remote server via the Angular XHRBackend service.

This package has been de-installed on 10th October 2017. This was used
for the mock data, warm up for beginning Angular 4.

### Realtime-Database Rules (Original Version) - Firebase

`
{
	"rules": {
     ".read": "auth != null",
     ".write": "auth != null"
   }
}
`

#### Config of Realtime-Database Rules

`
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
`

### Installation LESS (Styling)

`
npm install less --save
`

Config: .angular-cli.json

`
"styles": [
        ...,
        "styles.less"
      ],
"defaults": {
    "styleExt": "less",
    "component": {}
  }
`

### Installation of ng2-file-upload (upload images for example)

`
npm install ng2-file-upload --save
`

https://github.com/valor-software/ng2-file-upload

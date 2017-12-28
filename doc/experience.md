# Überlegung / Erfahrung (für die Präsentation gedacht - Slides machen):

## Besondere Leistungen:

* Pläne und Zeile gesetzt (Meilensteine erreicht)
* Organisieren von Templates (Public / Admin)
* Alle 2-3 Wochen Statusmeetings (Evernote, Trello, ...)
* Ausprobieren und Evaluation ngPrime / ngx-bootstrap
* Schritte (in etappenweise, Proof of Concept, Einrichtung, Firebase, ...)
* AuthGuard / Registration (Login) / Rollen definieren
* Registrationsprozess definiert
* Polyfills IE11 aktiv geschaltet
* Dokumentation verfasst (Readme)
* UX Testing durchgeführt

## Verbesserungsbedürfnisse;

* Unit Test - parallel schreiben und nicht am Schluss (mehr Zeit für Unit Tests)
* AOT spät entdeckt (späte Korrekturen machen dann auch schwieriger)
* AngularFire / Angular - Firebase (Vermischung) - Services
* IP -> Like Favorite
* package-lock.json (https://github.com/npm/npm/issues/16866)
* Rezept entfernt - Was passiert mit dem Favorite?
* 2x Crash Erlebnisse
* Ob wir es richtig bauen - Angular 2 (Style Guide) inkl. Firebase

* Testing Mobile (use it - Upload the photo)
* TypeScript
* Entry Components
* JWT Token nutzen / Custom Error Log / Observable / RxJS
* Emitter (Input / Output)

## Problem beim 2. Crash (Anfang November 2017)

`
angularfire2/database-deprecated
`

`
Error: Namespace 'firebase' has no exported member 'Promise' 
`

Upgraded with the other version - see package.json

The old version in the package.json was:

`
"angularfire2": "^4.0.0-rc.1",
"firebase": "^4.1.3”
`

* [Issue1183](https://github.com/angular/angularfire2/issues/1183)

### Andere Optionen wäre:

* Upgrade von AngularFire auf 5.0
* NPM Package: AngularFire2 deinstallieren und ohne AngularFire2 nutzen
* This did work: "enhanced-resolve": "^3.3.0"
* Eventuell versuchen mit der höhere Version von Angular CLI zu arbeiten (sprich hier: ab 1.6)

## ng build (Switching for the production problem)

`ng build --prod --aot=false`

* [Issue7118](https://github.com/angular/angular-cli/issues/7118)
* [Issue7113](https://github.com/angular/angular-cli/issues/7113)
* [Issue7138](https://github.com/angular/angular-cli/issues/7138)

### Andere Optionen wäre:

* Change the config data manually (environment.ts)
* This did work: "enhanced-resolve": "^3.3.0", later it didn't work anymore
* Eventuell versuchen mit der höhere Version von Angular CLI zu aktualisieren (sprich hier: ab 1.6)
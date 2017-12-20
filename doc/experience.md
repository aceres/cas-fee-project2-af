# Überlegung / Erfahrung (für die Präsentation gedacht - Slides noch machen):

Highlights / Leistungen:

* Organisieren von Templates (Public / Secure (Registered User / Admin))
* Alle 2-3 Wochen Statusmeetings (Evernote, Trello, ...)
* Ausprobieren und Evaluation ngPrime / ngx-bootstrap
* Schritte (in etappenweise, Proof of Concept, Einrichtung, Firebase, ...)
* AuthGuard / Registration (Login) / Rollen
* Registration Überlegung
* Polyfills IE11
* Doumentation (Readme)

* AngularFire / Angular - Firebase (Vermischung) - Services
* Testing - parallel schreiben und nicht am Schluss
* AOT spät entdeckt
* Ping -> IP -> Like Favorite
* package-lock.json (https://github.com/npm/npm/issues/16866)

* Alle Unit Tests abschliessen


* Event Emitter
* TypeScript
* Entry Components
* JWT / Custom Error Log

- IP
- Rezept entfernt - Favorite???
- 2x Crash
- Ob wir es richtig bauen

Problem beim 2. Crash
=====================

- 0 - remove firebase bevore .Promise / depreciated - .database

Error: Namespace 'firebase' has no exported member 'Promise' 

Now: Upgrade with the other version - see package.json

OLD:
`
"angularfire2": "^4.0.0-rc.1",
"firebase": "^4.1.3”
`
 
Andere Optionen:

* Upgrade von AngularFire auf 5.0
* AngularFire entfernen

Ausprobieren / Weiteres Vorgehen:

* JWT Token

ng build --prod (mode)

* https://github.com/angular/angular-cli/issues/7118 (Switch to prod)
* https://github.com/angular/angular-cli/issues/7113
* https://github.com/angular/angular-cli/issues/7138

* This did work: "enhanced-resolve": "^3.3.0"
* Ev. versuchen mit der höhere Version von Angular CLI
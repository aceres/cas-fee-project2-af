# Überlegung / Erfahrung (für die Präsentation):

Highlights:

- Templates (Public / Secure (Registered User / Admin))
- Ausprobieren ngPrime / ngx-bootstrap
- Proof of Concept
- AuthGuard / Registration (Login) / Rollen
- Templates (Organization)
- Lazy Loading (https://namitamalik.github.io/Lazy-Loading-with-Angular2-Routing/)
- Registration Überlegung
- AngularFire / Angular - Firebase (Vermischung) - Services
- Testing - parallel schreiben und nicht am Schluss
- AOT spät entdeckt
- Screenshots machen
- ngModule nutzen / Emitter
- .md (Install Manual schreiben)
- Ping -> IP -> Like Favorite
- SEO Analytics
- Polyfills IE11
- package-lock.json (https://github.com/npm/npm/issues/16866)

Problem beim 2. Crash
=====================

- 0 - remove firebase bevore .Promise / depreciated - .database

Error: Namespace 'firebase' has no exported member 'Promise' 

  1 - remove AngularFire
  
  2 - Now: Upgrade
  OLD:
  "angularfire2": "^4.0.0-rc.1",
  "firebase": "^4.1.3”
  
  Edit, Git (dann soll Tanja versuchen)
  
  3- Ansonsten: Upgrade 5.0

Ausprobieren:

- JWT Token
- Was würden wir gernen noch ausbauen? Ionic?
- Ev. Login Prozess beschreiben (Login)? - mit XMind App?
- env --prod (aot)
- Responsive Image - SRCSET - Upload - 2 Bilder erzeugen lassen

ng build --prod (mode)
- https://github.com/angular/angular-cli/issues/7118 (Switch to prod)
- https://github.com/angular/angular-cli/issues/7113
- https://github.com/angular/angular-cli/issues/7138

Manually solution:

Documentation: "/environments/environment.ts" anpassen
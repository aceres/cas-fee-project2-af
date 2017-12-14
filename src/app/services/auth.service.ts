import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(
      private firebaseAuth: AngularFireAuth
  ) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  }

  getUid() {
      const user = this.firebaseAuth.auth.currentUser;
      return user;
  }

  login(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  }

  isAuthenticated() {
      const user = this.firebaseAuth.auth.currentUser;
      return !!user;
  }

  logout() {
    return this.firebaseAuth
      .auth
      .signOut();
  }
}

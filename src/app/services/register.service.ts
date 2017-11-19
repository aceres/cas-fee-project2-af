import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/toPromise';

import { Register } from './models/register';

@Injectable()
export class RegisterService {
  user: FirebaseObjectObservable<any>;

  private headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
  private usersUrl = environment.apiUrl + 'users.json';

  constructor(
    private http: Http
  ) {}

  add(
    uid: string,
    firstName: string,
    lastName: string,
    email: string,
    role: string,
    street: string,
    houseNumber: string,
    zip: number,
    city: string,
    country: string) {

      return this.http
        .post(this.usersUrl, JSON.stringify({
          uid: uid,
          firstName: firstName,
          lastName: lastName,
          email: email,
          role: role,
          street: street,
          houseNumber: houseNumber,
          zip: zip,
          city: city,
          country: country,
          createdAt: new Date()}), {headers: this.headers})
        .map(res => res.json());

  }

  getUsers(): Promise<Register[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json() as Register[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

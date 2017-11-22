import { Injectable } from '@angular/core';

@Injectable()
export class MockAuthService {
    private loggedIn: boolean;

    isLoggedIn(state) {
        console.log('state', state);
        if (state === false || state === undefined) {
            return this.loggedIn;
        } else {
            return true;
        }
    }
}
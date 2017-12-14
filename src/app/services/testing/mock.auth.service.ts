import { Injectable } from '@angular/core';

@Injectable()
export class MockAuthService {
    private loggedIn: boolean;

    isLoggedIn(state) {
        if (state === false || state === undefined) {
            return this.loggedIn;
        } else {
            return true;
        }
    }
}
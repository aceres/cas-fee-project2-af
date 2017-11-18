import { inject, TestBed } from '@angular/core/testing';

import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Rx';

import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';

describe('Component: Login', () => {

    let component: LoginComponent;
    let service: AuthService;
    let spy: any;

    beforeEach(() => {
        service = new AuthService();
        component = new LoginComponent(service);
    });

    afterEach(() => {
        service = null;
        component = null;
    });
    //
    // it('canLogin returns false when the user is not authenticated', () => {
    //     spy = spyOn(service, 'isAuthenticated').and.returnValue(false);
    //     expect(component.login()).toBeTruthy();
    //     expect(service.isAuthenticated).toHaveBeenCalled();
    // });
    //
    // it('canLogin returns false when the user is not authenticated', () => {
    //     spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
    //     expect(component.login()).toBeFalsy();
    //     expect(service.isAuthenticated).toHaveBeenCalled();
    // });
});
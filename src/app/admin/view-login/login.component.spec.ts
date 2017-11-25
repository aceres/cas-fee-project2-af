import { inject, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs/Subject';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../services/auth.service';


const userAuthMethods = [
    'subscribe'
];

describe('Service: AuthService (Authentication)', () => {
    describe('AuthService', () => {
        let authService;
        let authSubject;
        let mockFirebaseAuth;

        beforeEach(() => {
            authSubject = new Subject<AngularFireAuth>();

            mockFirebaseAuth = jasmine.createSpyObj('userAuth', userAuthMethods);
            mockFirebaseAuth.subscribe.and.callFake(callback => {
                authSubject.subscribe(callback);
            });

            TestBed.configureTestingModule({
                providers: [
                    {provide: AngularFireAuth, useValue: mockFirebaseAuth},
                    AuthService
                ]
            });

            inject([AuthService], (service: AuthService) => {
                authService = service;
            })();
        });

        it('The service: AuthService for the LoginComponent should be defined!', () => {
            expect(authService).toBeDefined();
        });

    });
});
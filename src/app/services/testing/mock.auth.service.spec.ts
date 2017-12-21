// src/app/user.service.spec.ts
import { TestBed, inject } from '@angular/core/testing';
import { MockAuthService } from './mock.auth.service';

describe('MockAuthServiceTest - Login', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                MockAuthService
            ]
        });
    });

    it('#isLoggedIn should return false after creation', inject([MockAuthService], (service: MockAuthService) => {
        expect(service.isLoggedIn(false)).toBeFalsy();
    }));

    it('#isLoggedIn should return true after creation', inject([MockAuthService], (service: MockAuthService) => {
        expect(service.isLoggedIn(true )).toBeTruthy();
    }));
});
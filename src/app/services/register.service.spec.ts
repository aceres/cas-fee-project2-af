import { TestBed, async, inject } from '@angular/core/testing';
import { Headers, Http, HttpModule } from '@angular/http';

import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';

import { RegisterService } from './register.service';

describe('Service: Register', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule
            ],
            providers: [
                RegisterService,
                AngularFireDatabase,
                FirebaseApp
            ]
        });
    });

    it('It should create a RegisterService', inject([RegisterService], (service: RegisterService) => {
        expect(service).toBeTruthy();
    }));
});
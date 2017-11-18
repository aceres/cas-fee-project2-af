import { TestBed, async, inject } from '@angular/core/testing';
import { Headers, Http, HttpModule } from '@angular/http';

import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';

import { CuisineService } from './cuisine.service';

describe('Service: Cuisine', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule
            ],
            providers: [
                CuisineService,
                AngularFireDatabase,
                FirebaseApp
            ]
        });
    });

    it('It should create a FavoriteService', inject([CuisineService], (service: CuisineService) => {
        expect(service).toBeTruthy();
    }));
});
import { TestBed, async, inject } from '@angular/core/testing';
import { Headers, Http, HttpModule } from '@angular/http';

import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';

import { CategoryService } from './category.service';

describe('Service: Category', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule
            ],
            providers: [
                CategoryService,
                AngularFireDatabase,
                FirebaseApp
            ]
        });
    });

    it('It should create a FavoriteService', inject([CategoryService], (service: CategoryService) => {
        expect(service).toBeTruthy();
    }));
});
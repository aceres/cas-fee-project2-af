import { TestBed, async, inject } from '@angular/core/testing';
import { Headers, Http, HttpModule } from '@angular/http';

import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';

import { RecipeService } from './recipe.service';

describe('Service: Recipe', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule
            ],
            providers: [
                RecipeService,
                AngularFireDatabase,
                FirebaseApp
            ]
        });
    });

    it('It should create a RecipeService', inject([RecipeService], (service: RecipeService) => {
        expect(service).toBeTruthy();
    }));
});
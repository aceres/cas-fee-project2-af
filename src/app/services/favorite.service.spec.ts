import { TestBed, async, inject } from '@angular/core/testing';
import { Http, HttpModule } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { FavoriteService } from './favorite.service';

describe('Service: Favorite', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule
            ],
            providers: [
                FavoriteService,
                AngularFireDatabase,
                FirebaseApp
            ]
        });
    });

    it('It should create a FavoriteService', inject([FavoriteService], (service: FavoriteService) => {
        expect(service).toBeTruthy();
    }));
});
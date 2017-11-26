import { Component, ViewChild, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FavoriteService } from '../../services/favorite.service';
import { AlertComponent } from '../../ngx/alert/alert.component';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.less']
})
export class FavoritesListComponent implements OnInit {

  allFavorites: FirebaseListObservable<any[]>;

  // Alert
  @ViewChild('childAlert') public childAlert: AlertComponent;

  // Search Pipe
  public searchTerm;

  constructor(
    private router: Router,
    private favoriteService: FavoriteService,
    private db: AngularFireDatabase,
    public authService: AuthService
  ) {}

  remove(id): void {
    console.log('id: ', id);
    this.favoriteService
      .remove(id)
      .then(() => {
        this.childAlert.showAlert('success', `Lieblingsrezept wurde erfolgreich entfernt! (Geändert am: ${(new Date()).toLocaleTimeString()})`);
      });
  }

  ngOnInit(): void {
    this.allFavorites = this.db.list('/favorites', {
        query: {
            orderByChild: 'uid',
            equalTo: this.authService.getUid().uid
        }
    })
  }

  detail(recipe): void {
    this.router.navigate(['/admin/recipe-detail', recipe.$key]);
  }
}

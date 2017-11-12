import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { AlertComponent } from '../../ngx/alert/alert.component';

import { RecipeService } from '../../services/recipe.service';
import { FavoriteService } from '../../services/favorite.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-public-recipe-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class PublicReceiptDetailComponent implements OnInit {
  title = 'Manducare';
  recipe;
  image;
  key;
  rating: FirebaseListObservable<any[]>;

  uid;
  recipeId;
  public showAddFavorite;

  recipeName;

  // Alert
  @ViewChild('childAlert') public childAlert: AlertComponent;

  constructor(
    private recipeService: RecipeService,
    private favoriteService: FavoriteService,
    private route: ActivatedRoute,
    private location: Location,
    public db: AngularFireDatabase,
    public authService: AuthService
  ) {}

  ngOnInit() {

    this.key = this.route.snapshot.params['id'];
    this.getRecipe();

    // Save Favorite Recipe allowed or not
    if (this.authService !== null) {

      this.db.list('favorites', {
        query: {
          orderByChild: 'uid',
          equalTo: this.authService.getUid().uid
        }
      }).subscribe(items => {

        const filtered = items.filter(item => item.recipeId === this.key);
        if (filtered.length !== 0) {
          if (filtered[0].recipeId === this.key && filtered[0].uid === this.authService.getUid().uid) {
            this.showAddFavorite = false;
          } else {
            this.showAddFavorite = true;
          }
        } else {
          this.showAddFavorite = true;
        }
      });

    }
    window.scrollTo(0, 0);
  }

  getRecipe() {
    this.recipeService.getRecipe(this.key)
        .then(data => this.recipe = data)
        .catch( error => {
            this.childAlert.showAlert('danger', `Keine Verbindung! ` + error);
        })
  }

  addRecipeToFavorites(recipeKey, recipeName) {

    event.preventDefault();

    if (this.authService !== null) {
      this.favoriteService.addRecipeToFavorites(this.authService.getUid().uid, recipeKey, recipeName);
      this.childAlert.showAlert('success', `Super! Ihr Lieblingsrezept wurde in Ihrem Favoriten hinzugefügt! (Hinzugefügt am: ${(new Date()).toLocaleTimeString()})`);
    }
  }

  rateRecipe() {
    const databaseRef = this.db.object('recipes').$ref.child(this.key).child('rating');
    databaseRef.transaction(function(rating) {
      console.log('clicked');
      if (rating || (rating === 0)) {
        rating++;
      }
      return rating;
    }).then( result => {
        this.getRecipe();
        this.childAlert.showAlert('success', `Super! Vielen Dank für das Voten!`);

    }).catch( error => {
        this.childAlert.showAlert('danger', `Keine Verbindung! ` + error);
    })
  }

  goBack(): void {
    this.location.back();
  }
}

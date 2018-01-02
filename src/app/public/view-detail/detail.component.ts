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
import { listLevels } from '../../global/list.levels';
import { listCuisines } from '../../global/list.cuisines';

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
  showLike: boolean = true;

  uid;
  recipeId;
  public showAddFavorite;

  recipeName;
  levelFullName;
  cuisineFullName;

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
    if (this.authService.isAuthenticated()) {

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
        .then(data =>  {
            this.recipe = data
            for (let i = 0; i < listLevels.length; i++) {
                if (listLevels[i].value === this.recipe.level) {
                    this.levelFullName = listLevels[i].display;
                }
            }
            for (let i = 0; i < listCuisines.length; i++) {
                if (listCuisines[i].value === this.recipe.cuisine) {
                    this.cuisineFullName = listCuisines[i].name;
                }
            }
        }
        )
        .catch( error => {
            this.childAlert.showAlert('danger', `Keine Verbindung! ` + error);
        })
  }

  addRecipeToFavorites(recipeKey, recipeName) {

    event.preventDefault();

    if (this.authService !== null) {
      this.favoriteService.addRecipeToFavorites(this.authService.getUid().uid, recipeKey, recipeName);
      this.childAlert.showAlert('success', `Das Rezept wurde zu deinen Favoriten hinzugefügt! (Hinzugefügt am: ${(new Date()).toLocaleTimeString()})`);
    }
  }

  rateRecipe() {
    const databaseRef = this.db.object('recipes').$ref.child(this.key).child('rating');
    databaseRef.transaction(function(rating) {
      if (rating || (rating === 0)) {
        rating++;
      }
      return rating;
    }).then( result => {

        this.getRecipe();
        this.childAlert.showAlert('success', `Super! Vielen Dank für das Voten!`);
        this.showLike = false;

    }).catch( error => {
        this.childAlert.showAlert('danger', `Keine Verbindung! ` + error);
    });

    setTimeout(() => { this.showLike = true; }, 60000);
  }

  goBack(): void {
    this.location.back();
  }
}

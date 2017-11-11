import { Component, ViewChild, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

import { Recipe } from '../../services/models/recipe';
import { RecipeService } from '../../services/recipe.service';

import { AlertComponent } from '../../ngx/alert/alert.component';

@Component({
  selector: 'app-all-recipes-list',
  templateUrl: './all-recipes-list.component.html',
  styleUrls: ['./all-recipes-list.component.less']
})
export class AllRecipesListComponent implements OnInit {
  recipes: Recipe[];
  allRecipes: FirebaseListObservable<any[]>;

  public maxSize : number = 5;
  public bigTotalItems : number = 175;
  public bigCurrentPage : number = 1;
  public numPages : number = 0;

  // Alert
  @ViewChild('childAlert') public childAlert: AlertComponent;

  // Search Pipe
  public searchTerm;

  constructor(
    private router: Router,
    private recipeService: RecipeService,
    private db: AngularFireDatabase,
  ) {}

  remove(id): void {
    this.recipeService
      .remove(id)
      .then(() => {
        this.childAlert.showAlert('success', `Rezept wurde erfolgreich entfernt! (Geändert am: ${(new Date()).toLocaleTimeString()})`);
      });
  }

  ngOnInit() {
      this.allRecipes = this.db.list('/recipes');
  }

  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

  detail(recipe): void {
    this.router.navigate(['/admin/recipe-detail', recipe.$key]);
  }
}

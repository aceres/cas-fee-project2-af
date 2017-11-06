import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { Router } from '@angular/router';

import { RecipeService } from '../services/recipe.service';

@Component({
    selector: 'app-public',
    templateUrl: './public.component.html',
    styleUrls: ['./public.component.less']
})
export class PublicComponent {
    title = 'Manducare';

    allRecipes: FirebaseListObservable<any[]>;
    getAllRecipes;
    calculateAllRecipes;
    randomRecipe;

    constructor(
        private router: Router,
        db: AngularFireDatabase,
        private recipeService: RecipeService,
    ) {
        this.allRecipes = db.list('/recipes', {
            query: {
                orderByChild: 'rating'
            }
        })
            .map(items => items.sort((a, b) => b.rating - a.rating)) as FirebaseListObservable<any[]>;

        // Get the newest recipe
        this.randomRecipe = db.list('/recipes', {
            query: {
                limitToLast: 1
            }
        })
            .subscribe(item => {
                this.randomRecipe = item[0];
                console.log('randomRecipe: ', this.randomRecipe);
            })
    }

    detail(recipe): void {
        this.router.navigate(['/recipe-detail', recipe.$key]);
    }

    listRecipeSpecificCategory(category): void {
        this.router.navigate(['/category-list', category]);
    }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Recipe } from '../../services/models/recipe';
import { RecipeService } from '../../services/recipe.service';
import { listLevels } from '../../global/list.levels';
import { listCuisines } from '../../global/list.cuisines';
import { listCategories } from '../../global/list.categories';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.less']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id;
  levelFullName;
  cuisineFullName;
  categoryFullName;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.recipeService.getRecipe(params.get('id')))
      .subscribe(recipe => {
        this.recipe = recipe
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
          for (let i = 0; i < listCategories.length; i++) {
              if (listCategories[i].value === this.recipe.category) {
                  this.categoryFullName = listCategories[i].name;
              }
          }
      });

      this.id = this.route.snapshot.params['id'];
  }

  goBack(): void {
    this.location.back();
  }
}

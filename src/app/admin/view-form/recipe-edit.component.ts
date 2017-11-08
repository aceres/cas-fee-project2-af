import 'rxjs/add/operator/switchMap';

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { listCategories } from '../../global/list.categories';
import { listPortions } from '../../global/list.portions';
import { listLevels } from '../../global/list.levels';
import { listCuisines } from '../../global/list.cuisines';
import { listUnits } from '../../global/list.units';

import { Recipe } from '../../services/models/recipe';
import { Upload } from '../../services/models/upload';
import { Ingredient } from '../../services/models/ingredient';
import { Step } from '../../services/models/step';

import { RecipeService } from '../../services/recipe.service';
import { UploadService } from '../../services/upload.service';

import { AlertComponent } from '../../ngx/alert/alert.component';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.less'],
})
export class RecipeEditComponent implements OnInit {
  key;
  id;
  recipe: Recipe;

  // Image
  // image = [];
  selectedFiles: FileList;
  currentUpload: Upload;

  // Select items
  listCategories = listCategories;
  listPortions = listPortions;
  listLevels = listLevels;
  listCuisines = listCuisines;
  listUnits = listUnits;

  // Alert
  @ViewChild('childAlert') public childAlert: AlertComponent;

  // sessionStorage
  currentUser;

  // Initialize
  ingredients;
  steps;

  ingredient = {
    recipeQuantity: '',
    recipeIngredient: ''
  };
  step = {
    description: ''
  };

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private location: Location,
    private upSvc: UploadService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.recipeService.getRecipe(params.get('id')))
      .subscribe(recipe => this.recipe = recipe);

      this.id = this.route.snapshot.params['id'];
      this.key = this.route.snapshot.params['id'];
      console.log('this.id', this.id);
      console.log('this.key', this.key);

    // Get the currentUser from the sessionStorage
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  update(
      receipt: string,
      description: string,
      portion: string,
      prepTime: number,
      rating: number,
      level: string,
      category: string,
      cuisine: string,
      steps: any[],
      ingredients: any[],
      image: any[],
      uid: string,
      user: string): void {
    receipt = this.recipe.receipt.trim();
    description = this.recipe.description.trim();
    portion = this.recipe.portion.trim();
    prepTime = this.recipe.prepTime;
    rating = this.recipe.rating;
    level = this.recipe.level.trim();
    category = this.recipe.category.trim();
    cuisine = this.recipe.cuisine.trim();
    steps = this.recipe.steps;
    ingredients = this.recipe.ingredients;
    image = this.recipe.image;
    uid = this.currentUser.uid;
    user = this.currentUser.email;

    console.log('this.id', this.id);
    console.log('this.recipe.receipt', this.recipe.receipt);
    console.log('this.recipe.description', this.recipe.description);
    console.log('this.recipe.portion', this.recipe.portion);
    console.log('this.recipe.prepTime', this.recipe.prepTime);
    console.log('this.recipe.rating', this.recipe.rating);
    console.log('this.recipe.level', this.recipe.level);
    console.log('this.recipe.category', this.recipe.category);
    console.log('this.recipe.cuisine', this.recipe.cuisine);
    console.log('this.recipe.steps', this.recipe.steps);
    console.log('this.recipe.ingredients', this.recipe.ingredients);
    console.log('this.recipe.image', this.recipe.image);
    console.log('this.currentUser.uid', this.currentUser.uid);
    console.log('this.currentUser.email', this.currentUser.email);

    this.recipeService.update(this.id, receipt, description, portion, prepTime, rating, level, category, cuisine, steps, ingredients, image, uid, user)
        .then(response => {
        if (this.selectedFiles !== undefined) {
          this.removeExistedImage(this.id);
          const file = this.selectedFiles.item(0);
          console.log('File', file);
          console.log('Key recipe', this.key);
          this.currentUpload = new Upload(file);
          this.upSvc.pushUpload(this.currentUpload, this.key)
        }
        this.childAlert.showAlert('success', `Rezept wurde erfolgreich aktualisiert! (Geändert am: ${(new Date()).toLocaleTimeString()})`);
      });
  }

  removeExistedImage(key) {
    this.upSvc.deleteFileData(key);
  }

  addIngredient(quantity: number, unit: string, ingredient: string) {
    this.recipe.ingredients.push(new Ingredient(quantity, unit, ingredient));
  }

  removeIngredient(index) {
    this.recipe.ingredients.splice(index, 1);
  }

  addStep(stepDescription: string) {
    if (stepDescription) {
      this.recipe.steps.push(new Step(stepDescription));
    }
  }

  removeStep(index) {
    this.recipe.steps.splice(index, 1);
  }

  goBack(): void {
    this.location.back();
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';

import { listCategories } from '../../global/list.categories';
import { listPortions } from '../../global/list.portions';
import { listLevels } from '../../global/list.levels';
import { listCuisines } from '../../global/list.cuisines';
import { listUnits } from '../../global/list.units';

import { Recipe } from '../../services/models/recipe';
import { RecipeService } from '../../services/recipe.service';
import { AuthService } from '../../services/auth.service';

import { UploadService } from '../../services/upload.service';
import { Upload } from '../../services/models/upload';
import { Step } from '../../services/models/step';
import { Ingredient } from '../../services/models/ingredient';

import { AlertComponent } from '../../ngx/alert/alert.component';

@Component({
  selector: 'app-recipes-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.less']
})
export class RecipeAddComponent implements OnInit {

  recipes: Recipe[];

  listCategories = listCategories;
  listPortions = listPortions;
  listLevels = listLevels;
  listCuisines = listCuisines;
  listUnits = listUnits;

  image = [];
  selectedFiles: FileList;
  currentUpload: Upload;

  // Alert
  @ViewChild('childAlert') public childAlert: AlertComponent;

  // Initialize Step / Ingredient
  ingredients = [];
  steps = [];

  ingredient = {
    recipeQuantity: '',
    recipeIngredient: ''
  };

  constructor(
    private recipeService: RecipeService,
    private upSvc: UploadService,
    public authService: AuthService
  ) {}

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  add(name: string,
      description: string,
      portion: string,
      prepTime: number,
      level: string,
      category: string,
      cuisine: string,
      steps: any[],
      ingredients: any[],
      image: any[],
      uid: string,
      user: string): void {
            name = name.trim();
            description = description.trim();
            portion = portion.trim();
            prepTime = prepTime;
            level = level.trim();
            category = category.trim();
            cuisine = cuisine.trim();
            steps = this.steps;
            ingredients = this.ingredients;
            image = this.image;
            uid = this.authService.getUid().uid;
            user = this.authService.getUid().email;

            if (this.selectedFiles !== undefined) {
              this.recipeService.create(name, description, portion, prepTime, level, category, cuisine, steps, ingredients, image, uid, user)
                .then(response => {
                  const file = this.selectedFiles.item(0)
                  this.currentUpload = new Upload(file);
                  this.upSvc.pushUpload(this.currentUpload, response.name)
                  this.childAlert.showAlert('success', `Rezept wurde erfolgreich gespeichert! (Hinzugefügt am: ${(new Date()).toLocaleTimeString()})`);
                });
            } else {
              this.childAlert.showAlert('danger', `Bitte wählen Sie ein Bild aus!`);
            }
  }

  addIngredient(quantity: number, unit: string, ingredient: string) {
    this.ingredients.push(new Ingredient(quantity, unit, ingredient));
  }

  removeIngredient(index) {
    this.ingredients.splice(index, 1);
  }

  addStep(stepDescription: string) {
    if (stepDescription) {
      this.steps.push(new Step(stepDescription));
    }
  }

  removeStep(index) {
    this.steps.splice(index, 1);
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

import { Cuisine } from '../../services/models/cuisine';
import { CuisineService } from '../../services/cuisine.service';

@Component({
  templateUrl: './cuisine.component.html'
})
export class CuisineComponent implements OnInit {

    cuisines: Cuisine[];

    constructor(
        private cuisineService: CuisineService
    ) {}

    getCuisines(): void {
        this.cuisineService.getCuisines().then(cuisines => this.cuisines = cuisines);
    }

    ngOnInit(): void {
        this.getCuisines();
    }
}

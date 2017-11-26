import { Component, OnInit } from '@angular/core';
import { Category } from '../../services/models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {

  categories: Category[];

  constructor(
      private categoryService: CategoryService
  ) {}

  getCategories(): void {
      this.categoryService.getCategories().then(categories => this.categories = categories);
  }

  ngOnInit(): void {
      this.getCategories();
  }
}

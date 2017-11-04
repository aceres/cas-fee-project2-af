import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Category } from '../services/models/category';
import { listCategories } from '../global/list.categories';

@Injectable()
export class CategoryService {

  getCategories(): Promise<Category[]> {
      return Promise.resolve(listCategories);
  }

  // TODO: See the "Take it slow" appendix
  getCategoriesSlowly(): Promise<Category[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getCategories()), 2000);
    });
  }
}

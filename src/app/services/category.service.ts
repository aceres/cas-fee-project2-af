import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Category } from '../services/models/category';
import { listCategories } from '../global/list.categories';

@Injectable()
export class CategoryService {

  getCategories(): Promise<Category[]> {
      return Promise.resolve(listCategories);
  }
}

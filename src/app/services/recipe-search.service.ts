import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Recipe } from './models/recipe';

@Injectable()
export class RecipeSearchService {

  private recipesUrl = environment.apiUrl + 'recipes';

  constructor(
    private http: Http
  ) {}

  search(term: string): Observable<Recipe[]> {
    return this.http
      .get(this.recipesUrl + `.json?receipt=${term}`)
      .map(response => response.json() as Recipe[]);
  }
}

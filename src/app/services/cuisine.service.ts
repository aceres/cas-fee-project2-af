import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Cuisine } from '../services/models/cuisine';
import { listCuisines } from '../global/list.cuisines';

@Injectable()
export class CuisineService {

    getCuisines(): Promise<Cuisine[]> {
        return Promise.resolve(listCuisines);
    }
}

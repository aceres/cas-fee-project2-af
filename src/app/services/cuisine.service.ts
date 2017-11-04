import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Cuisine } from '../services/models/cuisine';
import { listCuisines } from '../global/list.cuisines';

@Injectable()
export class CuisineService {

    getCuisines(): Promise<Cuisine[]> {
        return Promise.resolve(listCuisines);
    }

    // TODO: See the "Take it slow" appendix
    getCategoriesSlowly(): Promise<Cuisine[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getCuisines()), 2000);
        });
    }
}

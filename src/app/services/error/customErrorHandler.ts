import { ErrorHandler } from '@angular/core';
import { MyError } from './myError';

export class CustomErrorHandler extends ErrorHandler {

    constructor() {
        super(false);
    }

    public handleError(error: any): void {

        if (error.originalError instanceof MyError) {
            console.log('MyError!');
            console.log(`[CUSTOM ERROR]:::${error.originalError.toString()}`);
        } else {
            console.log('Error: ', error);
            super.handleError(error);
        }
    }
}
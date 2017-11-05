import { ErrorHandler } from '@angular/core';
import { MyError } from './myError';

export class CustomErrorHandler extends ErrorHandler {

    constructor() {
        super(false);
    }

    public handleError(error: any): void {

        // You can add your own logic here.
        // It is not required to delegate to the original implementation
        if (error.originalError instanceof MyError) {
            console.log('MyError!');
            console.log(`[CUSTOM ERROR]:::${error.originalError.toString()}`);
        } else {
            console.log('error: ', error);
            super.handleError(error);
        }
    }
}
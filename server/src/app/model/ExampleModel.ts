/**
 * 
 */

import IExampleModel = require('./interfaces/ExampleModel');

class ExampleModel {

    private _exampleModel: IExampleModel;

    constructor(exampleModel: IExampleModel) {
        this._exampleModel = exampleModel;
    }

    get message (): string {
        return this._exampleModel.message;
    }
    
}
Object.seal(ExampleModel);
export =  ExampleModel;
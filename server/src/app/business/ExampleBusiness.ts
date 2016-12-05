/**
 * 
 */

import ExampleRepository = require("./../repository/ExampleRepository");
import IExampleBusiness = require("./interfaces/ExampleBusiness");
import IExampleModel = require("./../model/interfaces/ExampleModel");
import ExampleModel = require("./../model/ExampleModel");

class ExampleBusiness implements IExampleBusiness {
    private _exampleRepository: ExampleRepository;

    constructor () {
        this._exampleRepository = new ExampleRepository();
    }

    create (item: IExampleModel, callback: (error: any, result: any) => void) {
        this._exampleRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._exampleRepository.retrieve(callback);
    }

    update (_id: string, item: IExampleModel, callback: (error: any, result: any) => void) {

        this._exampleRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._exampleRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._exampleRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IExampleModel) => void) {
        this._exampleRepository.findById(_id, callback);
    }

}

Object.seal(ExampleBusiness);
export = ExampleBusiness;
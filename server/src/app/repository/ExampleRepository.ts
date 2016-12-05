/**
 * 
 */

import ExampleModel = require("./../model/ExampleModel");
import IExampleModel = require("./../model/interfaces/ExampleModel");
import ExampleSchema = require("./../dataAccess/schemas/ExampleSchema");
import RepositoryBase = require("./BaseRepository");

class ExampleRepository  extends RepositoryBase<IExampleModel> {
    constructor () {
        super(ExampleSchema);
    }
}

Object.seal(ExampleRepository);
export = ExampleRepository;
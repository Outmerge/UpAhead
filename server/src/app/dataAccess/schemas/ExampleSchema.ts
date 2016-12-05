/**
 * Created by Cosmin.Atomei on 10-09-2016.
 */

import DataAccess = require('../DataAccess');
import IExampleModel = require("./../../model/interfaces/ExampleModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class ExampleSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            message: { type: String, required: true }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IExampleModel>("Examples", ExampleSchema.schema);
export = schema;
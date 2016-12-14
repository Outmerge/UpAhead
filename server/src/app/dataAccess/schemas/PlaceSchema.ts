/**
 * Created by Cosmin.Atomei on 10-09-2016.
 */

import DataAccess = require('../DataAccess');
import IPlaceModel = require("./../../model/interfaces/PlaceModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

var CoordinateSchema = mongoose.Schema({
    lat: { type: String, required: true },
    lng: { type: String, required: true }
});

class PlaceSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            name: { type: String, required: true },
            description: String,
            tags: [ 
                String 
            ],
            sponsored: { type: Boolean, default: false },
            coordinate: CoordinateSchema,
            heartCount: { type: Number, default: 0 }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IPlaceModel>("Places", PlaceSchema.schema);
export = schema;
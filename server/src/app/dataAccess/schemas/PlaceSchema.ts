/**
 * Created by Cosmin.Atomei on 10-09-2016.
 */

import DataAccess = require('../DataAccess');
import IPlaceModel = require("./../../model/interfaces/PlaceModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

var ContactSchema = mongoose.Schema({
    phone: { type: String, required: null },
    email: { type: String, default: null }
});

var CoordinateSchema = mongoose.Schema({
    lat: { type: String, required: true },
    lng: { type: String, required: true }
});

class PlaceSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            placeId: { type: String, default: null },
            name: { type: String, required: true },
            description: String,
            address: { type: String, default: null },
            contact: ContactSchema,
            photoUrl: { type: String, default: null },
            photos: [
                String
            ],
            tags: [ 
                String 
            ],
            sponsored: { type: Boolean, default: false },
            coordinate: CoordinateSchema,
            distance: { type: Number, default: 0 },
            rating: { type: Number, default: null },
            heartCount: { type: Number, default: 0 }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IPlaceModel>("Places", PlaceSchema.schema);
export = schema;
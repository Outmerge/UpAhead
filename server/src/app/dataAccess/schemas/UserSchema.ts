/**
 * Created by Cosmin.Atomei on 10-09-2016.
 */

import DataAccess = require('../DataAccess');
import IUserModel = require("./../../model/interfaces/UserModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

var UserInterestSchema = mongoose.Schema({
    query: { type: String, lowercare: true, required: true },
    results: { type: Number, default: 0 },
    date: { type: Date, default: new Date() },
    count: { type: Number, default: 0 }
});

class UserSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            sessionKeys: { type: [ String ], required: true },
            username: { type: String, lowercase: true, match: /[a-z0-9-._]*/, index: { unique: true } },
            password: { type: String },
            favorites: [ String ],
            interests: [ UserInterestSchema ]
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IUserModel>("Users", UserSchema.schema);
export = schema;
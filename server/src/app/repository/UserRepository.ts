/**
 * 
 */

import UserModel = require("./../model/UserModel");
import IUserModel = require("./../model/interfaces/UserModel");
import UserSchema = require("./../dataAccess/schemas/UserSchema");
import RepositoryBase = require("./BaseRepository");

class UserRepository  extends RepositoryBase<IUserModel> {
    constructor () {
        super(UserSchema);
    }

    findOne (query: any, callback: (error: any, result: any) => void) {
        this._model.findOne(query, callback);
    }
}

Object.seal(UserRepository);
export = UserRepository;
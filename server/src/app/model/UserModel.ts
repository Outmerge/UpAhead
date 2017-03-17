/**
 * 
 */

import IUserModel = require('./interfaces/UserModel');
import IUserInterestModel = require('./interfaces/UserInterestModel');

class UserModel {

    private _userModel: IUserModel;

    constructor(userModel: IUserModel) {
        this._userModel = userModel;
    }

    get key (): string {
        return this._userModel.key;
    }

    get username (): string {
        return this._userModel.username;
    }

    get password (): string {
        return this._userModel.password;
    }

    get favorites (): Array<string> {
        return this._userModel.favorites;
    }

    get interests (): Array<IUserInterestModel> {
        return this._userModel.interests;
    }
    
}
Object.seal(UserModel);
export =  UserModel;
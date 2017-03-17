/**
 * Created by Cosmin.Atomei on 10-09-2016.
 */

import mongoose = require("mongoose");

import IUserInterestModel = require("./UserInterestModel");

interface UserModel extends mongoose.Document {
    key: string;
    username: string;
    password: string;
    favorites: Array<string>;
    interests: Array<IUserInterestModel>;
}

export = UserModel;
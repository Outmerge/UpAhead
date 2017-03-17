/**
 * Created by Cosmin.Atomei on 10-09-2016.
 */

import mongoose = require("mongoose");

import IUserInterestModel = require("./UserInterestModel");

interface UserModel extends mongoose.Document {
    query: string;
    results: number;
    date: Date;
    count: number;
}

export = UserModel;
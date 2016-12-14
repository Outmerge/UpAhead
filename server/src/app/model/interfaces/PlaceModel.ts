/**
 * Created by Cosmin.Atomei on 10-09-2016.
 */

import mongoose = require("mongoose");

import ICoordinateModel = require("./CoordinateModel");

interface PlaceModel extends mongoose.Document {
    name: string;
    description: string;
    tags: Array<string>;
    sponsored: boolean;
    coordinate: ICoordinateModel;
    heartCount: number;
}

export = PlaceModel;
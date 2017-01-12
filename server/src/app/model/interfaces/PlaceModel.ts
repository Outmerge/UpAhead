/**
 * Created by Cosmin.Atomei on 10-09-2016.
 */

import mongoose = require("mongoose");

import ICoordinateModel = require("./CoordinateModel");
import IContactModel = require("./ContactModel");

interface PlaceModel extends mongoose.Document {
    placeId: string,
    name: string;
    description: string;
    address: string;
    contact: IContactModel;
    photoUrl: string;
    photos: Array<string>;
    tags: Array<string>;
    sponsored: boolean;
    coordinate: ICoordinateModel;
    distance: number;
    rating: number;
    heartCount: number;
}

export = PlaceModel;
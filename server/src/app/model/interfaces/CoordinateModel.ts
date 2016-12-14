/**
 * Created by Cosmin.Atomei on 10-09-2016.
 */

import mongoose = require("mongoose");

interface CoordinateModel extends mongoose.Document {
    lat: string;
    lng: string;
}

export = CoordinateModel;
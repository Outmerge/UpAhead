/**
 * Created by Cosmin.Atomei on 10-09-2016.
 */

import mongoose = require("mongoose");

interface ExampleModel extends mongoose.Document {
    phone: string;
    email: string;
}

export = ExampleModel;
/**
 * Created by Cosmin.Atomei on 10-09-2016.
 */

import express = require("express");
interface ReadController {
    retrieve: express.RequestHandler;
    findById: express.RequestHandler;


}
export = ReadController;
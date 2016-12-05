/**
 * Created by Cosmin.Atomei on 10-09-2016.
 */

import express = require("express");
interface WriteController {
    create: express.RequestHandler;
    update: express.RequestHandler;
    delete: express.RequestHandler;

}

export = WriteController;
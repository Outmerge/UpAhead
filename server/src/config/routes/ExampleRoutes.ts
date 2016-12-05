/**
 * Created by Cosmin.Atomei on 10-09-2016.
 */

import express = require("express");
import ExampleController = require("./../../controllers/ExampleController");

var router = express.Router();

class ExampleRoutes {
    private _exampleController: ExampleController;
    private middleware;

    constructor (middleware) {
        this._exampleController = new ExampleController();
        this.middleware = middleware;
    }

    get routes () {
        var controller = this._exampleController;

        router.get("/", this.middleware, controller.retrieve);
        router.post("/", this.middleware, controller.create);
        router.put("/:_id", this.middleware, controller.update);
        router.get("/:_id", this.middleware, controller.findById);
        router.delete("/:_id", this.middleware, controller.delete);

        return router;
    }


}

Object.seal(ExampleRoutes);
export = ExampleRoutes;
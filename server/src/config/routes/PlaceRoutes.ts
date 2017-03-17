/**
 * Created by Cosmin.Atomei on 10-09-2016.
 */

import express = require("express");
import PlaceController = require("./../../controllers/PlaceController");

var router = express.Router();

class PlaceRoutes {
    private _placeController: PlaceController;
    private middleware;

    constructor (middleware) {
        this._placeController = new PlaceController();
        this.middleware = middleware;
    }

    get routes () {
        var controller = this._placeController;

        router.get("/", this.middleware, controller.retrieve);
        // router.post("/", this.middleware, controller.create);
        router.put("/:_id", this.middleware, controller.update);
        router.get("/:_id", this.middleware, controller.findById);
        // router.delete("/:_id", this.middleware, controller.delete);
        router.get("/:_id/favorite", this.middleware, controller.addFavorite);
        router.delete("/:_id/favorite", this.middleware, controller.removeFavorite);

        return router;
    }


}

Object.seal(PlaceRoutes);
export = PlaceRoutes;
/**
 * Created by Cosmin.Atomei on 10-09-2016.
 */

import express = require("express");
import UserController = require("./../../controllers/UserController");

var router = express.Router();

class UserRoutes {
    private _userController: UserController;
    private middleware;

    constructor (middleware) {
        this._userController = new UserController();
        this.middleware = middleware;
    }

    get routes () {
        var controller = this._userController;

        // router.get("/", this.middleware, controller.retrieve);
        // router.post("/", this.middleware, controller.create);
        // router.put("/:_id", this.middleware, controller.update);
        // router.get("/:_id", this.middleware, controller.findById);
        // router.delete("/:_id", this.middleware, controller.delete);

        return router;
    }


}

Object.seal(UserRoutes);
export = UserRoutes;
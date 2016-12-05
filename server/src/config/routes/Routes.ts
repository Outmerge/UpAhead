import express = require('express');
import path = require('path');

import Middleware = require('./Middleware');
import ExampleRoutes = require('../routes/ExampleRoutes');

var app = express();

class Routes {

    get routes() {

        app.use("/examples", new ExampleRoutes(new Middleware().allowAll).routes);
        
        return app;
    }
}
export = Routes;
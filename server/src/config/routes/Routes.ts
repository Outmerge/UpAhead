import express = require('express');
import path = require('path');

import Middleware = require('./Middleware');
import PlaceRoutes = require('../routes/PlaceRoutes');

var app = express();

class Routes {

    get routes() {

        app.use("/places", new PlaceRoutes(new Middleware().allowAll).routes);
        
        return app;
    }
}
export = Routes;
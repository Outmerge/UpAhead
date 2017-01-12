import express = require('express');
import path = require('path');
import Middleware = require('./Middleware');
import PlaceRoutes = require('../routes/PlaceRoutes');

var app = express();

class Routes {

    get routes() {

        app.use("/places", new PlaceRoutes(new Middleware().allowAll).routes);

        app.all('/*', (req: express.Request, res: express.Response) => {
            res.status(404).send({ success: false, message: 'Resource not found.', error: null });
        });

        return app;
    }
}
export = Routes;
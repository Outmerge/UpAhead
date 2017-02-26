/// <reference path="../typings/index.d.ts" />

import express = require('express');
import bodyParser = require('body-parser');

import BaseRoutes = require("./config/routes/Routes");
import path = require('path');

var port: number = process.env.PORT || 8090;
var env: string = process.env.NODE_ENV || 'developement';

var app = express();

// Set up RedisStore
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var redis = require('redis').createClient();

app.use(session({
    store: new RedisStore({
        host: 'localhost',
        port: 6379,
        client: redis,
        ttl :  260
    }),
    secret: 'keyboard cat!',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 36000000,
        httpOnly: false
    }
}));

app.set('port', port);

app.use('/app', express.static(path.resolve(__dirname, '../client/app')));
app.use('/libs', express.static(path.resolve(__dirname, '../client/libs')));

// for system.js to work. Can be removed if bundling.
app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.static(path.resolve(__dirname, '../../node_modules')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', new BaseRoutes().routes);

var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
}

app.get('/*', renderIndex);

if(env === 'developement'){
    app.use(function(err, req: express.Request, res: express.Response, next: express.NextFunction) {
        res.status(err.status || 500);
        res.json({
            error: err,
            message: err.message
        });
    });
}


// catch 404 and forward to error handler
app.use(function(req: express.Request, res: express.Response, next) {
    let err = new Error("Not Found This");
    next(err);
});

// production error handler
// no stacktrace leaked to user
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});

export { app }
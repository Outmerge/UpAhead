/**
 * 
 */

import express = require("express");
import PlaceBusiness = require("./../app/business/PlaceBusiness");
import UserBusiness = require("./../app/business/UserBusiness");
import IBaseController = require("./BaseController");
import IPlaceModel = require("./../app/model/interfaces/PlaceModel");
import ICoordinateModel = require("./../app/model/interfaces/CoordinateModel");
import IUserModel = require("./../app/model/interfaces/UserModel");

class PlaceController implements IBaseController <PlaceBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            var place: IPlaceModel = <IPlaceModel>req.body;
            var placeBusiness = new PlaceBusiness();
            placeBusiness.create(place, (error, result) => {
                if(error) res.send({ success: false, message: 'There was an error in PlaceController.', error: error });
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({ success: false, message: 'There was an error in your request.', error: e });

        }
    }

    update(req: express.Request, res: express.Response): void {
        try {
            var place: IPlaceModel = <IPlaceModel>req.body;
            var _id: string = req.params._id;
            var placeBusiness = new PlaceBusiness();
            placeBusiness.update(_id, place, (error, result) => {
                if(error) res.send({ success: false, message: 'There was an error in PlaceController.', error: error });
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({ success: false, message: 'There was an error in your request.', error: e });

        }
    }

    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var placeBusiness = new PlaceBusiness();
            placeBusiness.delete(_id, (error, result) => {
                if(error) res.send({ success: false, message: 'There was an error in PlaceController.', error: error });
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({ success: false, message: 'There was an error in your request.', error: e });

        }
    }

    retrieve(req: express.Request, res: express.Response): void {
        try {

            var _query: string = req.query.query;
            var _coordinate: string = req.query.coordinate;

            if (_query && _coordinate) {
                var placeBusiness = new PlaceBusiness();
                placeBusiness.retrieveFromThirdParty(_query, _coordinate, (error, result) => {
                    if (error) res.send({ success: false, message: 'There was an error in PlaceController.', error: error });
                    else {
                        if (req.session) {
                            for (var index = 0; index < result.data.length; index ++)
                                req.session['{place-id}' + result.data[index].placeId] = result.data[index];
                        }
                        res.send(result.results);
                    }
                });
            } else {
                res.status(400).send({ success: false, message: 'Invalid request.', error: null });
            }
        }
        catch (e)  {
            console.log(e);
            res.send({ success: false, message: 'There was an error in your request.', error: e });

        }
    }

    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var _coordinate: string = req.query.coordinate;

            var placeBusiness = new PlaceBusiness();

            if (_coordinate) {
                if (req.session && req.session['{place-id}' + _id]) {
                    res.send(req.session['{place-id}' + _id]);
                } else {
                    placeBusiness.findByIdFromThirdParty(_id, _coordinate, (error, result) => {
                        if(error) res.send({ success: false, message: 'There was an error in PlaceController.', error: error });
                        else res.send(result);
                    });
                }
            } else {
                res.status(400).send({ success: false, message: 'Invalid request.', error: null });
            }
        }
        catch (e)  {
            console.log(e);
            res.send({ success: false, message: 'There was an error in your request.', error: e });

        }
    }

    addFavorite(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;

            var placeBusiness = new PlaceBusiness(),
                userBusiness = new UserBusiness();

            if (req.session && req.session['{user-id}']) {
                userBusiness.findBySessionId(req.session['{user-id}'], (error, user) => {
                    if (error || !user) res.send({ success: false, message: 'There was an error while finding User in PlaceController.', error: error });
                    else {
                        if (user.favorites.indexOf(_id) === -1)
                            user.favorites.push(_id);
                        userBusiness.update(user._id, user, (error, result) => {
                            if (error) res.send({ success: false, message: 'There was an error while updating User in PlaceController.', error: error });
                            else res.send({ success: true });
                        });
                    }
                });
            } else {
                res.status(400).send({ success: false, message: 'Invalid request.', error: null });
            }
        }
        catch (e)  {
            console.log(e);
            res.send({ success: false, message: 'There was an error in your request.', error: e });

        }
    }

    removeFavorite(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;

            var placeBusiness = new PlaceBusiness(),
                userBusiness = new UserBusiness();

            if (req.session && req.session['{user-id}']) {
                userBusiness.findBySessionId(_id, (error, user) => {
                    if (error) res.send({ success: false, message: 'There was an error while finding User in PlaceController.', error: error });
                    else {
                        user.favorites = user.favorites.filter(
                            item => {
                                return item !== _id;
                            }
                        );
                        userBusiness.update(user._id, user, (error, result) => {
                            if (error) res.send({ success: false, message: 'There was an error while updating User in PlaceController.', error: error });
                            else res.send({ success: true });
                        });
                    }
                });
            } else {
                res.status(400).send({ success: false, message: 'Invalid request.', error: null });
            }
        }
        catch (e)  {
            console.log(e);
            res.send({ success: false, message: 'There was an error in your request.', error: e });

        }
    }
}
export = PlaceController;
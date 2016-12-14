/**
 * 
 */

import express = require("express");
import PlaceBusiness = require("./../app/business/PlaceBusiness");
import IBaseController = require("./BaseController");
import IPlaceModel = require("./../app/model/interfaces/PlaceModel");

class PlaceController implements IBaseController <PlaceBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            var place: IPlaceModel = <IPlaceModel>req.body;
            var placeBusiness = new PlaceBusiness();
            placeBusiness.create(place, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var place: IPlaceModel = <IPlaceModel>req.body;
            var _id: string = req.params._id;
            var placeBusiness = new PlaceBusiness();
            placeBusiness.update(_id, place, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var placeBusiness = new PlaceBusiness();
            placeBusiness.delete(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {

            // var placeBusiness = new PlaceBusiness();
            // placeBusiness.retrieve((error, result) => {
            //     if(error) res.send({"error": "error"});
            //     else res.send(result);
            // });

            let result: any = [
                {
                    _id: '21f3921b31u2b012b03b21u3b21u3b12',
                    name: 'EPIC Sport',
                    tags: ['shoes', 'sport', 't-shirts', 'ski', 'snowboard', 'climbing'],
                    distance: 212,
                    sponsored: true
                },
                {
                    _id: '21f3921b31u2b012b03b21u3b21u3b12',
                    name: 'Boarder\'s Shop',
                    tags: ['skate', 'shoes', 'sport'],
                    distance: 3400,
                    sponsored: false
                },
                {
                    _id: '21f3921b31u2b012b03b21u3b21u3b12',
                    name: 'U Man',
                    tags: ['shoes', 't-shirts'],
                    distance: 2319,
                    sponsored: false
                }
            ];
            res.send(result);
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            // var _id: string = req.params._id;
            // var placeBusiness = new PlaceBusiness();
            // placeBusiness.findById(_id, (error, result) => {
            //     if(error) res.send({"error": "error"});
            //     else res.send(result);
            // });

            let result: any = {
                _id: '21f3921b31u2b012b03b21u3b21u3b12',
                name: 'EPIC Sport',
                tags: ['shoes', 'sport', 't-shirts', 'ski', 'snowboard', 'climbing'],
                description: '',
                distance: 212,
                coordinate: {
                    lat: '20.21312421',
                    lng: '15.92309234'
                },
                sponsored: true
            };
            res.send(result);
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
}
export = PlaceController;
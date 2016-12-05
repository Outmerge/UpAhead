/**
 * 
 */

import express = require("express");
import ExampleBusiness = require("./../app/business/ExampleBusiness");
import IBaseController = require("./BaseController");
import IExampleModel = require("./../app/model/interfaces/ExampleModel");

class ExampleController implements IBaseController <ExampleBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            var example: IExampleModel = <IExampleModel>req.body;
            var exampleBusiness = new ExampleBusiness();
            exampleBusiness.create(example, (error, result) => {
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
            var example: IExampleModel = <IExampleModel>req.body;
            var _id: string = req.params._id;
            var exampleBusiness = new ExampleBusiness();
            exampleBusiness.update(_id, example, (error, result) => {
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
            var exampleBusiness = new ExampleBusiness();
            exampleBusiness.delete(_id, (error, result) => {
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

            var exampleBusiness = new ExampleBusiness();
            exampleBusiness.retrieve((error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var exampleBusiness = new ExampleBusiness();
            exampleBusiness.findById(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
}
export = ExampleController;
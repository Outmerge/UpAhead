import Constants = require("../../config/constants/constants");

import mongoose = require("mongoose");

import UserBusiness = require("../../app/business/UserBusiness");
import IUserModel = require("../../app/model/interfaces/UserModel");

class Middleware {
    
    constructor() {}

    get allowAll() {
        return (req, res, next) => {
            next();
            
            /* 
             * Or you could restrict access and send a specific error 
             */
            // res.status(403).json({ success: false, message: 'Some random error message.' })
        }
    }

    get track() {
        return (req, res, next) => {
            var userBusiness = new UserBusiness();

            if (req.session && req.session['{user-id}'] && req.session['{user-id}'] !== '') {
                // User Key already set in session
                next();
            } else {
                // User Key not set in session
                
                // Check for User Key in Cookies
                if (req.cookies && req.cookies._ua_sk && req.cookies._ua_sk !== '') {
                    // User Key found in Cookies
                    req.session['{user-id}'] = req.cookies._ua_sk;
                    next();
                } else {
                    // User Key not found in Cookies
                    var newSessionKey: string = (new mongoose.Types.ObjectId()).toHexString();
                    
                    var user: IUserModel = <IUserModel>{};
                    user.sessionKeys = [ newSessionKey ];
                    
                    userBusiness.create(user, (error, result) => {
                        req.session['{user-id}'] = newSessionKey;
                        res.cookie('_ua_sk', newSessionKey);
                        next();
                    });
                }
            }
        }
    }

}
export = Middleware;
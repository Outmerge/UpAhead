import Constants = require("../../config/constants/constants");

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

}
export = Middleware;
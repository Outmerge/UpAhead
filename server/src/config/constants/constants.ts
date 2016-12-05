/**
 * Created by Cosmin.Atomei on 10-09-2016.
 */

class Constants {
    static DB_CONNECTION_STRING: string = process.env.NODE_ENV === 'production' ? process.env.dbURI : "mongodb://localhost:27017/Angular2Express";
}
Object.seal(Constants);
export = Constants;
/**
 * Created by Cosmin.Atomei on 10-09-2016.
 */

class Constants {
    static DB_CONNECTION_STRING: string = process.env.NODE_ENV === 'production' ? process.env.dbURI : "mongodb://localhost:27017/upahead";
    static GOOGLE_MAPS_API_KEY: string = 'AIzaSyAGKYfEb0o6rh73OAdt5P6ZseF9FKgsXoM';
}
Object.seal(Constants);
export = Constants;
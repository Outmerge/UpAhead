/**
 * 
 */

import PlaceModel = require("./../model/PlaceModel");
import IPlaceModel = require("./../model/interfaces/PlaceModel");
import PlaceSchema = require("./../dataAccess/schemas/PlaceSchema");
import RepositoryBase = require("./BaseRepository");

class PlaceRepository  extends RepositoryBase<IPlaceModel> {
    constructor () {
        super(PlaceSchema);
    }
}

Object.seal(PlaceRepository);
export = PlaceRepository;
/**
 * 
 */

import PlaceRepository = require("./../repository/PlaceRepository");
import IPlaceBusiness = require("./interfaces/PlaceBusiness");
import IPlaceModel = require("./../model/interfaces/PlaceModel");
import PlaceModel = require("./../model/PlaceModel");

class PlaceBusiness implements IPlaceBusiness {
    private _placeRepository: PlaceRepository;

    constructor () {
        this._placeRepository = new PlaceRepository();
    }

    create (item: IPlaceModel, callback: (error: any, result: any) => void) {
        this._placeRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._placeRepository.retrieve(callback);
    }

    update (_id: string, item: IPlaceModel, callback: (error: any, result: any) => void) {

        this._placeRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._placeRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._placeRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IPlaceModel) => void) {
        this._placeRepository.findById(_id, callback);
    }

}

Object.seal(PlaceBusiness);
export = PlaceBusiness;
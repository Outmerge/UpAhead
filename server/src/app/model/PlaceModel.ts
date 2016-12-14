/**
 * 
 */

import IPlaceModel = require('./interfaces/PlaceModel');
import ICoordinateModel = require('./interfaces/CoordinateModel');

class PlaceModel {

    private _placeModel: IPlaceModel;

    constructor(placeModel: IPlaceModel) {
        this._placeModel = placeModel;
    }

    get name (): string {
        return this._placeModel.name;
    }

    get tags (): Array<string> {
        return this._placeModel.tags;
    }
    
    get description (): string {
        return this._placeModel.description;
    }

    get coordinate (): ICoordinateModel {
        return this._placeModel.coordinate;
    }

    get sponsored (): boolean {
        return this._placeModel.sponsored;
    }

    get heartCount (): number {
        return this._placeModel.heartCount;
    }
    
}
Object.seal(PlaceModel);
export =  PlaceModel;
/**
 * 
 */

import IPlaceModel = require('./interfaces/PlaceModel');
import ICoordinateModel = require('./interfaces/CoordinateModel');
import IContactModel = require('./interfaces/ContactModel');

class PlaceModel {

    private _placeModel: IPlaceModel;

    constructor(placeModel: IPlaceModel) {
        this._placeModel = placeModel;
    }

    get placeId (): string {
        return this._placeModel.placeId;
    }

    get name (): string {
        return this._placeModel.name;
    }
    
    get description (): string {
        return this._placeModel.description;
    }

    get address (): string {
        return this._placeModel.address;
    }

    get contact (): IContactModel {
        return this._placeModel.contact;
    }

    get photoUrl (): string {
        return this._placeModel.photoUrl;
    }
    
    get photos (): Array<string> {
        return this._placeModel.photos;
    }

    get tags (): Array<string> {
        return this._placeModel.tags;
    }

    get sponsored (): boolean {
        return this._placeModel.sponsored;
    }

    get coordinate (): ICoordinateModel {
        return this._placeModel.coordinate;
    }

    get distance (): number {
        return this._placeModel.distance;
    }

    get rating (): number {
        return this._placeModel.rating;
    }

    get heartCount (): number {
        return this._placeModel.heartCount;
    }
    
}
Object.seal(PlaceModel);
export = PlaceModel;
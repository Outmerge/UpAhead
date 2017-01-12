/**
 * 
 */

import IPlaceCondensedModel = require('./interfaces/PlaceCondensedModel');

class PlaceCondensedModel {

    private _placeCondensedModel: IPlaceCondensedModel;

    constructor(placeCondensedModel: IPlaceCondensedModel) {
        this._placeCondensedModel = placeCondensedModel;
    }

    get id (): string {
        return this._placeCondensedModel.id;
    }

    get name (): string {
        return this._placeCondensedModel.name;
    }

    get tags (): Array<string> {
        return this._placeCondensedModel.tags;
    }

    get distance (): number {
        return this._placeCondensedModel.distance;
    }

    get sponsored (): boolean {
        return this._placeCondensedModel.sponsored;
    }

    get photoUrl (): string {
        return this._placeCondensedModel.photoUrl;
    }

    get open (): boolean {
        return this._placeCondensedModel.open;
    }
    
}
Object.seal(PlaceCondensedModel);
export = PlaceCondensedModel;
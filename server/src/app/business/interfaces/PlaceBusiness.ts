/**
 * 
 */

import BaseBusiness = require("./../BaseBusiness");
import IPlaceModel = require("./../../model/interfaces/PlaceModel");
import ICoordinateModel = require("./../../model/interfaces/CoordinateModel");

interface PlaceBusiness extends BaseBusiness<IPlaceModel> {
    retrieveFromThirdParty(query: string, coordinate: string, callback: (error: any, result: any) => void);
    findByIdFromThirdParty(id: string, coordinate: string, callback: (error: any, result: any) => void);
    extractPlaceCondensedData(item: any, coordinate: ICoordinateModel);
    extractPlaceData(item: any, coordinate: ICoordinateModel);
}
export = PlaceBusiness;
/**
 * 
 */

import PlaceRepository = require("./../repository/PlaceRepository");
import IPlaceBusiness = require("./interfaces/PlaceBusiness");
import IPlaceModel = require("./../model/interfaces/PlaceModel");
import IPlaceCondensedModel = require("./../model/interfaces/PlaceCondensedModel");
import ICoordinateModel = require("./../model/interfaces/CoordinateModel");
import PlaceModel = require("./../model/PlaceModel");

import Constants = require("../../config/constants/constants");

var googleMapsClient = require('@google/maps').createClient({
    key: Constants.GOOGLE_MAPS_API_KEY
});
var geolib = require('geolib');

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

    retrieveFromThirdParty (query: string, coordinate: string, callback: (error: any, result: any) => void) {
        let coordinateArr = coordinate.replace(' ', '').split(',');
        let coordinateObj: ICoordinateModel = <ICoordinateModel>{
            lat: coordinateArr[0],
            lng: coordinateArr[1]
        };
        googleMapsClient.places(
            {
                query: query,
                language: 'en',
                location: coordinateObj,
                // radius: 10,
                // minprice: 0,
                // maxprice: 1000,
                // opennow: true,
                // type: '',
                // pagetoken: ''
            },
            (err, res) => {
                if (!err) {
                    let results: Array<IPlaceCondensedModel> = [];
                    let data: Array<IPlaceModel> = [];
                    
                    // Prep results
                    results = res.json.results.map(
                        item => {
                            return this.extractPlaceCondensedData(item, coordinateObj);
                        }
                    );

                    // Sort by distance
                    results = results.sort(
                        (a, b) => {
                            return a.distance - a.distance;
                        }
                    );

                    // Prep Session data
                    data = res.json.results.map(
                        item => {
                            return this.extractPlaceData(item, coordinateObj);
                        }
                    );

                    callback(err, { results: results, data: data });
                } else
                    callback(err, null);
            }
        );
    };

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

    findByIdFromThirdParty (_id: string, coordinate: string, callback: (error: any, result: IPlaceModel) => void) {
        let coordinateArr = coordinate.replace(' ', '').split(',');
        let coordinateObj: ICoordinateModel = <ICoordinateModel>{
            lat: coordinateArr[0],
            lng: coordinateArr[1]
        };
        googleMapsClient.place(
            {
                placeid: _id,
                language: 'en'
            },
            (err, res) => {
                if (!err) {
                    let result: IPlaceModel;

                    // Prep Session data
                    result = this.extractPlaceData(res.json.result, coordinateObj);

                    callback(err, result);
                } else
                    callback(err, null);
            }
        );
    }

    extractPlaceCondensedData(item: any, coordinateObj: ICoordinateModel) {
        let place: IPlaceCondensedModel = <IPlaceCondensedModel>{
                id: item.place_id,
                name: item.name,
                tags: [],
                distance: 0,
                sponsored: false,
                photoUrl: null,
                open: item.opening_hours ? item.opening_hours.open_now : null
        };
        
        // Add the main photo
        if (item.photos && item.photos.length > 0)
            place.photoUrl = "https://maps.googleapis.com/maps/api/place/photo?maxwidth={_maxWidth}&photoreference={_photoReferance}&key={_apiKey}"
                .replace('{_maxWidth}', '320')
                .replace('{_photoReferance}', item.photos[0].photo_reference)
                .replace('{_apiKey}', Constants.GOOGLE_MAPS_API_KEY);
        
        // Compute straight distance
        place.distance = geolib.getDistance(
            { latitude: coordinateObj.lat, longitude: coordinateObj.lng },
            { latitude: item.geometry.location.lat, longitude: item.geometry.location.lng }
        );
        return place;
    }

    extractPlaceData(item: any, coordinateObj: ICoordinateModel) {
        let place: IPlaceModel = <IPlaceModel>{
            placeId: item.place_id,
            name: item.name,
            description: null,
            address: item.formatted_address ? item.formatted_address : null,
            contact: {
                phone: item.formatted_phone_number ? item.formatted_phone_number : null
            },
            photoUrl: null,
            tags: [],
            sponsored: false,
            coordinate: <ICoordinateModel>{
                lat: item.geometry.location.lat,
                lng: item.geometry.location.lng
            },
            distance: 0,
            rating: item.rating ? item.rating : null,
            heartCount: 0
        };
        
        // Add the main photo
        if (item.photos && item.photos.length > 0)
            place.photoUrl = "https://maps.googleapis.com/maps/api/place/photo?maxwidth={_maxWidth}&photoreference={_photoReferance}&key={_apiKey}"
                .replace('{_maxWidth}', '320')
                .replace('{_photoReferance}', item.photos[0].photo_reference)
                .replace('{_apiKey}', Constants.GOOGLE_MAPS_API_KEY);
        
        // Compute straight distance
        place.distance = geolib.getDistance(
            { latitude: coordinateObj.lat, longitude: coordinateObj.lng },
            { latitude: item.geometry.location.lat, longitude: item.geometry.location.lng }
        );
        return place;
    }
}

Object.seal(PlaceBusiness);
export = PlaceBusiness;
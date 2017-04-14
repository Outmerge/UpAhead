import { Injectable } from '@angular/core';

import { CoordinateModel } from '../models/coordinate.model';

@Injectable()
export class LocationService {

    public options: any = {
        enableHighAccuracy: true,
        maximumAge: 0
    };

    constructor() {}

    getCoordinates(callback: any) {
        navigator.geolocation.getCurrentPosition(callback, this.errorCallback, this.options);
    }

    // successCallback = (position) => {
    //     let latitude = position.coords.latitude;
    //     let longitude = position.coords.longitude;

    //     this.location = <CoordinateModel>{
    //         lat: latitude,
    //         lng: longitude
    //     };

    //     return this.location;
    // }

    errorCallback = (error) => {
        let errorMessage = 'Unknown error';
        switch (error.code) {
            case 1:
                errorMessage = 'Permission denied';
                break;
            case 2:
                errorMessage = 'Position unavailable';
                break;
            case 3:
                errorMessage = 'Timeout';
                break;
        }
        console.log(errorMessage);
    };
}

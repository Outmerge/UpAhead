/**
 * 
 */

import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { CoordinateModel } from "../models/coordinate.model";
import { PlaceCondensedModel } from "../models/place-condensed.model";

import { ConfigService } from "./config.service";

@Injectable()
export class PlacesService {

    constructor(private _http: Http,
        private _config: ConfigService) { }
    
    list(coordinate: CoordinateModel) {
        const path = this._config.apiUrl + '/places?query=sport&coordinate={latitude},{longitude}'
            .replace('{latitude}', coordinate.lat)
            .replace('{longitude}', coordinate.lng);
        
        return this._http
            .get(path, { headers: this._config.apiHeaders.Default })
            .map((res: Response) => {
                return res.json();
            });
    }
}
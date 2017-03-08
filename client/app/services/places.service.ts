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
    
    list(query: string, coordinate: CoordinateModel) {
        const path = this._config.apiUrl + '/places?query={query}&coordinate={latitude},{longitude}'
            .replace('{latitude}', coordinate.lat)
            .replace('{longitude}', coordinate.lng)
            .replace('{query}', query);
        
        return this._http
            .get(path, { headers: this._config.apiHeaders.Default })
            .map((res: Response) => {
                return res.json();
            });
    }
    

    getDetails(id: string, coordinate: CoordinateModel){
        const path = this._config.apiUrl + '/places/{id}?coordinate={latitude},{longitude}'
            .replace('{latitude}', coordinate.lat)
            .replace('{longitude}', coordinate.lng)
            .replace('{id}', id);
        
        return this._http
            .get(path, { headers: this._config.apiHeaders.Default })
            .map((res: Response) => {
                return res.json();
            });
    }

    addToFavorite(id: string){
        const path = this._config.apiUrl + '/places/{id}/favorite'
            .replace('{id}', id);
        return this._http
            .post(path, { headers: this._config.apiHeaders.Default })
            .map((res: Response) => {
                return res.json();
            });
    }

    deletefromFavorite(id: string){
        const path = this._config.apiUrl + '/places/{id}/favorite'
            .replace('{id}', id);
        return this._http
            .delete(path, { headers: this._config.apiHeaders.Default })
            .map((res: Response) => {
                return res.json();
            });
    }

    listTheFavorites(){
        const path = this._config.apiUrl + '/places?query=sport&favorites=true';
       
        return this._http
            .get(path, { headers: this._config.apiHeaders.Default })
            .map((res: Response) => {
                return res.json();
            });
    }
}
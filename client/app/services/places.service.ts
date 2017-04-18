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

    getFlickr(query: string){
        let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=cb3856e77ccf23b9db42c77ad5c70d96&tags=${query}&per_page=1&format=json&nojsoncallback=1`;
        return this._http
            .get(url)
            .map(res => res.json())
            .map((val) => {
                if (val.stat === 'ok') {
                    return val.photos.photo.map((photo: any) => {
                        let source = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
                        return {
                            url: source,
                            title: photo.title
                        }
                    })
                }
                else {
                    return [];
                }
            });
    }
    
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
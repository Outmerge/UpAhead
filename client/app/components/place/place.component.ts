
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

import { PlacesService } from '../../services/places.service';
import { LocationService} from '../../services/location.service';

import { CoordinateModel } from '../../models/coordinate.model';
import { PlaceModel } from '../../models/place.model';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { PlaceMapStyle } from '../../assets/styles/map.style';

@Component({
    selector: 'place',
    templateUrl: './app/components/place/place.component.html',
    styleUrls: ['./app/components/place/place.component.css']
})

export class PlaceComponent implements OnInit {
    private theid:string;
    public place: PlaceModel = null;
    public name: string;
    public favorite: PlaceModel;
    public lat: string = '';
    public lng: string = '';
    public mapStyle: Array<any> = PlaceMapStyle.GetStyle();

    constructor(private _router: Router,
                private route: ActivatedRoute,
                private _places: PlacesService,
                private _location:LocationService) {}
    ngOnInit() {

        this.route.params
            .map(params => params['id'])
            .subscribe(res => this.theid = res);
        this._location.getCoordinates((position) => {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            let coordinate: CoordinateModel = <CoordinateModel>{
                lat: latitude,
                lng: longitude
            };
            this._places.getDetails(this.theid, coordinate).subscribe(
                res => {
                    console.log(res);
                    this.place = res;
                    this.lat = this.place.coordinate.lat;
                    this.lng = this.place.coordinate.lng;  
                }
            );
        });
    }  

    addToFavorite(){
            this._places.addToFavorite(this.theid)
            .subscribe(
                res => {
                    //
                }
            )
        } 
}

 
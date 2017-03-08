/**
 * 
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { CoordinateModel } from '../../models/coordinate.model';
import { PlaceModel } from '../../models/place.model';


import { PlacesService } from '../../services/places.service';
import { LocationService } from '../../services/location.service';

import { LocationComponent } from '../location/location.component';
import { PlaceComponent } from '../place/place.component';
import { VendorComponent } from '../vendor-profile/vendor.component';
import { Place } from '../place/place.interface';

import { PlaceCondensedModel } from '../../models/place-condensed.model';

@Component({
    selector: 'results',
    templateUrl: './app/components/results/results.component.html',
    styleUrls: ['./app/components/results/results.component.css'],
})

export class ResultsComponent implements OnInit {

    private dataLoaded: boolean = false;

    private query: string = '';
    public selectedCity: any;
    public places_number: number;
    public places: Array<Place> = [];

    constructor(private _router: Router,
        private _places: PlacesService,
        private route: ActivatedRoute,
        private _location: LocationService) { };

    ngOnInit() {
        this.route.params
            .map(params => params['query'])
            .subscribe(res => this.query = res)
        console.log("avem la search:", this.query);
        
        this.search();
    }

    goToFavorites() {
        this._router.navigate(['/favorites']);
    }

    search(){
        this.dataLoaded = false;
         this._location.getCoordinates((position) => {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            let coordinate: CoordinateModel = <CoordinateModel>{
                lat: latitude,
                lng: longitude
            };
            this._places.list(this.query, coordinate).subscribe(
                res => {
                    console.log(res);
                    this.places = res;
                    this.places_number = this.places.length;
                    
                    this.dataLoaded = true;
                }
            );
        });
    }
}




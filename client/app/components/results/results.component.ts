/**
 * 
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { CoordinateModel } from '../../models/coordinate.model';

import { PlacesService } from '../../services/places.service';

import {LocationComponent} from '../location/location.component';

@Component({
    selector: 'results',
    templateUrl: './app/components/results/results.component.html',
    styleUrls: ['./app/components/results/results.component.css'],
})

export class ResultsComponent implements OnInit {

    private thequery:string = '';
    public selectedCity:any;
    constructor(private _router: Router,
                private _places: PlacesService,
                private route: ActivatedRoute) {};

    ngOnInit() {
        this.route.params
            .map(params => params['query'])
            .subscribe(res => this.thequery = res)
             console.log("avem la search:", this.thequery);     
    }
}
        // Get "query" argument
        // ! Tip: ActivatedRoute
        // ...

        // Get User's location coordinates
        // ...

        // Make API endpoint call to (PlacesService)
        // ...

        // List results fetched from the API
        // ! Tip
        // let coordinate: CoordinateModel = <CoordinateModel>{
        //     lat: '20',
        //     lng: '20'
        // };
        // this._places.list(coordinate).subscribe(
        //     res => {
        //         console.log(res);
        //     }
        // );
        // ...


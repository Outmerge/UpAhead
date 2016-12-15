/**
 * 
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { CoordinateModel } from '../../models/coordinate.model';

import { PlacesService } from '../../services/places.service';

import {ngSelectLocation, EmitterService} from '../location/browser-location';

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
                private route: ActivatedRoute,
                private EmitterService: EmitterService) {
                    window.localStorage.removeItem("city");
                 };

    ngOnInit() {
        this.route.params
            .map(params => params['query'])
            .subscribe(res => this.thequery = res)
             console.log("avem la search:", this.thequery);
        this.selectedCity = localStorage.getItem('city');
        EmitterService.get("selectedCity").subscribe(data =>{
        this.selectedCity = data;
        localStorage.setItem('city', data);
        });
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
    }
}
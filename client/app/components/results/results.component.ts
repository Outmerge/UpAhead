/**
 * 
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CoordinateModel } from '../../models/coordinate.model';

import { PlacesService } from '../../services/places.service';

@Component({
    selector: 'results',
    templateUrl: './app/components/results/results.component.html',
    styleUrls: ['./app/components/results/results.component.css']
})

export class ResultsComponent implements OnInit {

    constructor(private _router: Router,
                private _places: PlacesService) { }

    ngOnInit() {
        // Get "query" argument
        // ! Tip: ActivatedRoute
        // ...

        // Get User's location coordinates
        // ...

        // Make API endpoint call to (PlacesService)
        // ...

        // List results fetched from the API
        // ...

        let coordinate: CoordinateModel = <CoordinateModel>{
            lat: '20',
            lng: '20'
        };
        this._places.list(coordinate).subscribe(
            res => {
                console.log(res);
            }
        );

    }
}
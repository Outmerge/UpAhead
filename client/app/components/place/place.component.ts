import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Place } from './place.interface';


@Component({
    selector: 'results-place',
    templateUrl: './app/components/place/place.component.html',
    styleUrls: ['./app/components/place/place.component.css'],
})


export class PlaceComponent implements OnInit{

    @Input('model') model: Place = null;
    constructor(){};
    ngOnInit(){
        console.log("hello");
    }
}

/**
 * 
 */

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './app/components/home/home.component.html',
    styleUrls: ['./app/components/home/home.component.css']
})

export class HomeComponent implements OnInit {

    private message: string = 'Hello World of Angular2 and ExpressJS! With MongoDB sprinkles.';

    constructor(private _router: Router) {}

    ngOnInit() {}
}
/**
 * 
 */

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'example',
    templateUrl: './app/components/example/example.component.html',
    styleUrls: ['./app/components/example/example.component.css']
})

export class ExampleComponent implements OnInit {

    private message: string = 'Hello World of Angular2 and ExpressJS! With MongoDB sprinkles.';

    constructor(private _router: Router) {}

    ngOnInit() {}
}
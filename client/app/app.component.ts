import {Component, OnInit, OnChanges} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector:'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent {

    constructor(private _router: Router) {}
    ngOnInit() {}
}
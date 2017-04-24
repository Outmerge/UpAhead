/**
 * 
 */

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './app/components/home/home.component.html',
    styleUrls: ['./app/components/home/home.component.css']
})

export class HomeComponent implements OnInit {

    private query: string = '';

    constructor(private _router: Router) {}

    ngOnInit() {}

    queryPlaces() {
        this._router.navigate(['/results/', this.query]);
    }

    toAbout(){
        this._router.navigate(['/about/']);
    }

    toHelp(){
        this._router.navigate(['/help/']);
    }
}
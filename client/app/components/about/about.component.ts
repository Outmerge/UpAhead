
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'about',
    templateUrl: './app/components/about/about.component.html',
    styleUrls: ['./app/components/about/about.component.css']
})

export class AboutComponent implements OnInit {

    constructor(private _router: Router) {}

    ngOnInit() {}

}
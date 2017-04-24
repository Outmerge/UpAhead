
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'help',
    templateUrl: './app/components/help/help.component.html',
    styleUrls: ['./app/components/help/help.component.css']
})

export class HelpComponent implements OnInit {

    constructor(private _router: Router) {}

    ngOnInit() {}

}
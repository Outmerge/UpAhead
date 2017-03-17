import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PlaceThumbnailModel } from './place-thumbnail.interface';


@Component({
    selector: 'place-thumbnail',
    templateUrl: './app/components/place-thumbnail/place-thumbnail.component.html',
    styleUrls: ['./app/components/place-thumbnail/place-thumbnail.component.css'],
})


export class PlaceThumbnailComponent implements OnInit{
    
    @Input('model') model: PlaceThumbnailModel = null;
    private id:string = '';
     
    constructor(private _router: Router){};
    
    ngOnInit(){
        this.id = this.model.id;
    }

    toVendor(){
        this._router.navigate(['/place/', this.id]);
    } 

}

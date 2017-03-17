import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PlaceCondensedModel } from '../../models/place-condensed.model';


@Component({
    selector: 'place-thumbnail',
    templateUrl: './app/components/place-thumbnail/place-thumbnail.component.html',
    styleUrls: ['./app/components/place-thumbnail/place-thumbnail.component.css'],
})


export class PlaceThumbnailComponent implements OnInit{
    
    @Input('model') model: PlaceCondensedModel = null;
    private id:string = '';
     
    constructor(private _router: Router){};
    
    ngOnInit(){
        this.id = this.model.id;
    }

    toVendor(){
        console.log(this.id, this.model);
        this._router.navigate(['/place/', this.id]);
    } 

}

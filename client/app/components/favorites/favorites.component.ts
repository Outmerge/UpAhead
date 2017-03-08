import { Component, OnInit} from '@angular/core';

import { PlacesService } from '../../services/places.service';
import { PlaceModel} from '../../models/place.model';

@Component({
    selector: 'favorite',
    templateUrl: './app/components/favorites/favorites.component.html',
    styleUrls: ['./app/components/favorites/favorites.component.css'],
})

export class FavoritesComponent {
    places: Array<PlaceModel> = [];

    constructor(private _places: PlacesService){};
    ngOnInit(){
        this._places.listTheFavorites().subscribe(
                res => {
                 this.places = res;
                }
            );
    }
}
import { Component, OnInit} from '@angular/core';

import { PlacesService } from '../../services/places.service';
import { PlaceCondensedModel} from '../../models/place-condensed.model';

@Component({
    selector: 'favorite',
    templateUrl: './app/components/favorites/favorites.component.html',
    styleUrls: ['./app/components/favorites/favorites.component.css'],
})

export class FavoritesComponent {
    places: Array<PlaceCondensedModel> = [];

    constructor(private _places: PlacesService){};
    ngOnInit(){
        this._places.listTheFavorites().subscribe(
                res => {
                 this.places = res;
                }
            );
    }
}
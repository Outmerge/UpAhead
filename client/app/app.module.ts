import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

// [Modules]
import { AgmCoreModule } from 'angular2-google-maps/core';

// [Components]
import { HomeComponent } from './components/home/home.component';
import { ResultsComponent } from './components/results/results.component';
import { PlaceThumbnailComponent } from './components/place-thumbnail/place-thumbnail.component';
import { PlaceComponent } from './components/place/place.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

//[Directives]
import { DirectionsMapDirective } from './directives/google-map.directive';

// [Services]
import { ConfigService } from './services/config.service';
import { PlacesService } from './services/places.service';
import { LocationService } from './services/location.service';

// [Constants]
const GOOGLE_MAPS_API_KEY: string = 'AIzaSyC6-YO_vES-kUYGmqekdtmyJc8hqNwsvhk';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing,
        AgmCoreModule.forRoot({
            apiKey: GOOGLE_MAPS_API_KEY
        })
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ResultsComponent,
        PlaceThumbnailComponent,
        PlaceComponent,
        FavoritesComponent,
        DirectionsMapDirective
    ],
    providers: [
        ConfigService,
        PlacesService,
        LocationService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

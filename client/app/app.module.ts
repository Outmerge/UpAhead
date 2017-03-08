import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

// [Components]
import { HomeComponent } from './components/home/home.component';
import { ResultsComponent } from './components/results/results.component';
import { LocationComponent } from './components/location/location.component';
import { PlaceComponent } from './components/place/place.component';
import { VendorComponent } from './components/vendor-profile/vendor.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

// [Services]
import { ConfigService } from './services/config.service';
import { PlacesService } from './services/places.service';
import { EmitterService } from './services/emitter.service';
import { LocationService } from './services/location.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ResultsComponent,
        LocationComponent,
        PlaceComponent,
        VendorComponent,
        FavoritesComponent
    ],
    providers: [
        ConfigService,
        PlacesService,
        EmitterService,
        LocationService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

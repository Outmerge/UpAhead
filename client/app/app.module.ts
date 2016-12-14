import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

// [Components]
import { HomeComponent } from './components/home/home.component';
import { ResultsComponent } from './components/results/results.component';

// [Services]
import { ConfigService } from './services/config.service';
import { PlacesService } from './services/places.service';

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
        ResultsComponent
    ],
    providers: [
        ConfigService,
        PlacesService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

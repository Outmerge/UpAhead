import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ResultsComponent } from './components/results/results.component';
import { PlaceComponent } from './components/place/place.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'results/:query',
        component: ResultsComponent
    },
    {
        path: 'place/:id',
        component: PlaceComponent
    },
    {
        path: 'favorites',
        component: FavoritesComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'help',
        component: HelpComponent
    }

];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ResultsComponent } from './components/results/results.component';

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
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
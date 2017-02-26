import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ResultsComponent } from './components/results/results.component';
import { VendorComponent } from './components/vendor-profile/vendor.component';


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
        path: 'vendor/:id',
        component: VendorComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
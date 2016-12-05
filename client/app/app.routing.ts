import { Routes, RouterModule } from '@angular/router';

import { ExampleComponent } from './components/example/example.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/example',
        pathMatch: 'full'
    },
    {
        path: 'example',
        component: ExampleComponent
    },
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
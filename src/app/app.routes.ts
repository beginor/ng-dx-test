import { RouterModule, Routes } from '@angular/router';

import { GridComponent } from './components/grid/grid.component';
import { HomeComponent } from './components/home/home.component';

export const RouteComponents = [
    HomeComponent,
    GridComponent
];

export const AppRoutes = RouterModule.forRoot(
    [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'grid', component: GridComponent }
    ],
    { useHash: true, enableTracing: false }
);

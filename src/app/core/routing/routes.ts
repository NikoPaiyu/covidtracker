import { Routes } from "@angular/router";

export const covidRoutes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('../../modules/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path : 'home',
        loadChildren: () => import('../../modules/home/home.module').then(m => m.HomeModule)
    }
];
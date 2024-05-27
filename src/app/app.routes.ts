import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: "dashboard",
        pathMatch: 'full'
    },
    {
        path: "dashboard",
        component: DashboardComponent
    },
    {
        path: "about/team",
        loadComponent: () => import('./features/about/team/team.component').then((component) => component.TeamComponent)
    }
];

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
        component: DashboardComponent,
        providers: []
    },
    {
        path: 'about',
        loadChildren: () => import('./features/about/about.routes').then((routes) => routes.AboutRoutes)
    },
    {
        path: 'control-panel',
        loadChildren: () => import('./features/control-panel/control-panel.routes').then((routes) => routes.ControlPanelRoutes)
    }
   
];

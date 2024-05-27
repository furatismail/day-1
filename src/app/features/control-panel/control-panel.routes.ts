import { Routes } from "@angular/router";
import { StatisticsComponent } from "./statistics/statistics.component";

export const ControlPanelRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import('./overview/overview.component').then((component) => component.OverviewComponent),
        children: [
            {
                path: 'settings',
                loadComponent: () => import('./settings/settings.component').then((component) => component.SettingsComponent)
            },
            {
                path: 'statistics',
                component: StatisticsComponent
            }
        ]
    }
]
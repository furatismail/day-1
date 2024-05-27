import { Routes } from "@angular/router";
import { StatisticsComponent } from "./statistics/statistics.component";
import { photosResolver } from "../../core/resolvers/photo.resolver";

export const ControlPanelRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import('./overview/overview.component').then((component) => component.OverviewComponent),
        children: [
            {
                path: 'settings',
                loadComponent: () => import('./settings/settings.component').then((component) => component.SettingsComponent),
                data: {preload: true, preloadDelay: 5000}
            },
            {
                path: 'statistics',
                component: StatisticsComponent,
                resolve: {
                    photos: photosResolver
                }
            }
        ]
    }
]
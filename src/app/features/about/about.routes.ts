import { Routes } from "@angular/router";

export const AboutRoutes: Routes = [
    {
        path: 'team',
        loadComponent: () => import('./team/team.component').then((c) => c.TeamComponent)
    },
    {
        path: 'company',
        loadComponent: () => import('./company/company.component').then((c) => c.CompanyComponent)
    },
        // localhost:4200/about => redirect to the company
    {
        path: '',
        redirectTo: "company",
        pathMatch: 'full'
    },

]
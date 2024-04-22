import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [{
        path: '', redirectTo: '/dashboard', pathMatch: 'full' 
    }, {
        path: 'dashboard', component: DashboardComponent
    }, { 
        path: 'top10', loadComponent: () => import('./pages/top10/top10.component')
            .then(c => c.Top10Component)
    }, { 
        path: 'form', loadComponent: () => import('./pages/form/form.component')
            .then(c => c.FormComponent)
    }
]

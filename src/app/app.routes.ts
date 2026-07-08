import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: '',
        loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
            },
            {
                path: 'crear',
                loadComponent: () => import('./pages/administracion/usuarios/gestion/crear/crear.component').then(m => m.CrearComponent)
            },
            {
                path: 'editar',
                loadComponent: () => import('./pages/administracion/usuarios/gestion/editar/editar.component').then(m => m.EditarComponent)
            },
            {
                path: 'permisos',
                loadComponent: () => import('./pages/administracion/usuarios/roles/permisos/permisos.component').then(m => m.PermisosComponent)
            },
            // aquí agregas el resto de vistas (admin, reportes, etc.)
        ]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
import { MenuItem } from './menu-item.model';

export const MENU_DATA: MenuItem[] = [
    {
        label: 'Dashboard',
        icon: 'dashboard',
        route: '/dashboard'
    },
    {
        label: 'Administración',
        icon: 'settings',
        children: [
            {
                label: 'Usuarios',
                children: [
                    {
                        label: 'Gestión',
                        children: [
                            { label: 'Crear usuario', route: '/admin/usuarios/crear' },
                            { label: 'Editar usuario', route: '/admin/usuarios/editar' }
                        ]
                    },
                    {
                        label: 'Roles',
                        children: [
                            { label: 'Asignar permisos', route: '/admin/usuarios/roles/permisos' }
                        ]
                    }
                ]
            },
            {
                label: 'Configuración',
                children: [
                    {
                        label: 'General',
                        children: [
                            { label: 'Preferencias', route: '/admin/config/general/preferencias' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        label: 'Reportes',
        icon: 'description',
        children: [
            {
                label: 'Ventas',
                children: [
                    {
                        label: 'Mensuales',
                        children: [
                            { label: 'Ver reporte', route: '/reportes/ventas/mensuales' }
                        ]
                    }
                ]
            }
        ]
    }
];
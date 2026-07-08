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
                icon: 'people',
                children: [
                    {
                        label: 'Gestión',
                        icon: 'manage_accounts',
                        children: [
                            { label: 'Crear usuario', route: '/admin/usuarios/crear' },
                            { label: 'Editar usuario', route: '/admin/usuarios/editar' }
                        ]
                    },
                    {
                        label: 'Roles',
                        icon: 'security',
                        children: [
                            { label: 'Asignar permisos', route: '/admin/usuarios/roles/permisos' }
                        ]
                    }
                ]
            },
            {
                label: 'Configuración',
                icon: 'tune',
                children: [
                    {
                        label: 'General',
                        icon: 'settings_applications',
                        children: [
                            { label: 'Mi cuenta', route: '/admin/config/general/preferencias' }
                        ]
                    }
                ]
            }
        ]
    }
];
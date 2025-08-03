export type menuItemSchema = {
    label: string;
    href: string | null;
    icon: string | null;
    hasSubMenu: boolean;
    subMenuChangeState: (state: boolean) => void;
}


export const menuItems: menuItemSchema[] = [
    {
        label: 'Home',
        href: '/',
        icon: null,
        hasSubMenu: false,
        subMenuChangeState: () => {},
    },
    {
        label: 'Core Technology',
        href: null,
        icon: null,
        hasSubMenu: true,
        subMenuChangeState: () => {},
    },
    {
        label: 'Plugins',
        href: '/plugins',
        icon: null,
        hasSubMenu: false,
        subMenuChangeState: () => {},
    },
    {
        label: 'About',
        href: '/about',
        icon: null,
        hasSubMenu: false,
        subMenuChangeState: () => {},
    },
    
]

export const CoreTechnologySubMenuItems: menuItemSchema[] = [
    {
        label: 'Monitoring',
        href: '/monitoring',
        icon: null,
        hasSubMenu: false,
        subMenuChangeState: () => {},
    },

    {
        label: 'Data Manager',
        href: '/data-manager',
        icon: null,
        hasSubMenu: false,
        subMenuChangeState: () => {},
    },

    {
        label: 'PILA',
        href: '/pila',
        icon: null,
        hasSubMenu: false,
        subMenuChangeState: () => {},
    },
    
    
]

export type menuItemSchema = {
    label: string;
    href: string | null;
    icon: string | null;
    hasSubMenu: boolean;
    subMenuChangeState: (state: boolean) => void;
    hasModalWindow: boolean;
    modalWindowChangeState: (state: boolean) => void;
}


export const menuItems: menuItemSchema[] = [
    {
        label: 'Home',
        href: '/',
        icon: null,
        hasSubMenu: false,
        subMenuChangeState: () => {},
        hasModalWindow: false,
        modalWindowChangeState: () => {},
    },
    {
        label: 'Core Technology',
        href: null,
        icon: null,
        hasSubMenu: true,
        subMenuChangeState: () => {},
        hasModalWindow: false,
        modalWindowChangeState: () => {},
    },
    {
        label: 'Plugins',
        href: '/plugins',
        icon: null,
        hasSubMenu: false,
        subMenuChangeState: () => {},
        hasModalWindow: false,
        modalWindowChangeState: () => {},   
    },
    {
        label: 'About',
        href: '/about',
        icon: null,
        hasSubMenu: false,
        subMenuChangeState: () => {},
        hasModalWindow: true,
        modalWindowChangeState: () => {},
    },
    
]

export const CoreTechnologySubMenuItems: menuItemSchema[] = [
    {
        label: 'Monitoring',
        href: '/monitoring',
        icon: null,
        hasSubMenu: false,
        subMenuChangeState: () => {},
        hasModalWindow: false,
        modalWindowChangeState: () => {},
    },

    {
        label: 'Data Manager',
        href: '/data-manager',
        icon: null,
        hasSubMenu: false,
        subMenuChangeState: () => {},
        hasModalWindow: false,
        modalWindowChangeState: () => {},
    },

    {
        label: 'PILA',
        href: '/pila',
        icon: null,
        hasSubMenu: false,
        subMenuChangeState: () => {},
        hasModalWindow: false,
        modalWindowChangeState: () => {},
    },
    
    
]

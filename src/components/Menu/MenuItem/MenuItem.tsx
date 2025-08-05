import PlusIcon from '../../Design/Icons/PlusIcon/PlusIcon';
import './MenuItem.scss'

interface MenuItemProps {
    label: string;
    href: string | null;
    hasSubMenu: boolean;
    subMenuChangeState: (state: boolean) => void;
    itemClass: string;
    subMenuState: boolean;
    hasModalWindow: boolean;
    modalWindowChangeState: (state: boolean) => void;
}

export default function MenuItem({label, href, itemClass, hasSubMenu, subMenuChangeState, subMenuState, hasModalWindow, modalWindowChangeState}: MenuItemProps) {
    
    return (
        <div className={`menu-item ${itemClass}`} onClick={() => hasSubMenu ? subMenuChangeState(true) : hasModalWindow ? modalWindowChangeState(true) : null}>
            {
                hasSubMenu ? (
                    <div className={`plus-icon ${subMenuState ? 'turn-to-close' : ''}`}>
                        <PlusIcon />
                    </div>
                ) : null
            }   
            {
                href ? (
                    <a className="menu-item-label" href={href}>
                        {label}
                    </a>
                ) : (
                    <div className="menu-item-label">
                        {label}
                    </div>
                )
            }

            {
                hasModalWindow ? (
                    <div className="menu-item-label modal-window-label">
                        {label}
                    </div>
                ) : null
            }
        </div>
    )
}
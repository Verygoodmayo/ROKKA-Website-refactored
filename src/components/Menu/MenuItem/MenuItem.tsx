import './MenuItem.scss'

interface MenuItemProps {
    label: string;
    href: string | null;
    icon: string | null;
    hasSubMenu: boolean;
    subMenuChangeState: (state: boolean) => void;
    itemClass: string;
}

export default function MenuItem({label, href, itemClass, icon, hasSubMenu, subMenuChangeState}: MenuItemProps) {
    return (
        <div className={`menu-item ${itemClass}`} onClick={() => hasSubMenu ? subMenuChangeState(true) : null}>
            {icon && <img src={icon} alt={label} />}
            {
                href ? (
                    <a className="menu-item-label" href={href}>
                        {label}
                    </a>
                ) : (
                    <div className="sub-menu-label">
                        {label}
                    </div>
                )
            }
        </div>
    )
}
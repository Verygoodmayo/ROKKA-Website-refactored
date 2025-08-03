import ROKKAFrame from "../ROKKAFrame/ROKKAFrame"
import './Menu.scss'
import logotype from '../../assets/SVG/Logotype/Logotype.svg'
import MenuItem from "./MenuItem/MenuItem"
import { menuItems } from '../../content/menu/menu_content'
import CoreTechnologySubMenu from "./CoreTechnologySubMenu/CoreTechnologySubMenu"
import { useState } from "react"


export default function Menu({state, changeState}: {state: boolean, changeState: (state: boolean) => void}) {

    const [isCoreTechnologySubMenuOpen, setIsCoreTechnologySubMenuOpen] = useState(false);

    const handleSubMenuChangeState = (state: boolean) => {
        if (!state) {
            setIsCoreTechnologySubMenuOpen(true);
            return;
        } 
        setIsCoreTechnologySubMenuOpen(false);
        return;
    }

    return (
        <div className={`menu ${state ? 'open' : 'closed'}`}
            onMouseLeave={() => changeState(false)}
            onMouseEnter={() => changeState(true)}
        >
            <ROKKAFrame content={
                <>
                    <div className="logotype">
                        <img src={logotype} alt="logo" />
                    </div>

                    <div className="menu-items">
                        {menuItems.map((item) => (
                            <MenuItem key={item.label} {...item} itemClass={`menu-item ${item.label}`} hasSubMenu={item.hasSubMenu} subMenuChangeState={() => item.hasSubMenu ? handleSubMenuChangeState(isCoreTechnologySubMenuOpen) : null}/>
                        ))}
                    </div>
                </>
            } 
            contentWrapperClass='menu-content-wrapper' />
            <CoreTechnologySubMenu state={isCoreTechnologySubMenuOpen} changeState={setIsCoreTechnologySubMenuOpen} />
        </div>
    )
}
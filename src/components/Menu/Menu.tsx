import ROKKAFrame from "../ROKKAFrame/ROKKAFrame"
import './Menu.scss'
import logotype from '../../assets/SVG/Logotype/Logotype.svg'
import MenuItem from "./MenuItem/MenuItem"
import { menuItems } from '../../content/menu/menu_content'
import CoreTechnologySubMenu from "./CoreTechnologySubMenu/CoreTechnologySubMenu"
import { useState } from "react"


interface MenuProps {
    state: boolean;
    changeState: (state: boolean) => void;
    modalWindowState: boolean;
    setModalWindowState: (state: boolean) => void;
}


export default function Menu({state, changeState, modalWindowState, setModalWindowState}: MenuProps) {

    const [isCoreTechnologySubMenuOpen, setIsCoreTechnologySubMenuOpen] = useState(false);

    const handleSubMenuChangeState = (state: boolean) => {
        if (!state) {
            setIsCoreTechnologySubMenuOpen(true);
            return;
        } 
        setIsCoreTechnologySubMenuOpen(false);
        return;
    }

    const handleModalWindowChangeState = (state: boolean) => {
        if (!state) {
            setModalWindowState(true);
            return;
        } 
        setModalWindowState(false);
        return;
    }

    return (
        <div className={`menu ${state ? 'open' : 'closed'}`}
            onMouseLeave={() => {
                changeState(false);
                setIsCoreTechnologySubMenuOpen(false);
            }}
            onMouseEnter={() => {
                changeState(true);
                setIsCoreTechnologySubMenuOpen(false);
            }}
        >
            <ROKKAFrame content={
                <>
                    <div className="logotype">
                        <img src={logotype} alt="logo" />
                    </div>

                    <div className="menu-items">
                        {
                            menuItems.map((item,index) => (

                                <MenuItem 
                                        key={`${item.label}-${index}`} {...item} 
                                        itemClass={`menu-item-${index}`} 
                                        hasSubMenu={item.hasSubMenu}
                                        subMenuState={isCoreTechnologySubMenuOpen}
                                        subMenuChangeState={() => item.hasSubMenu ? handleSubMenuChangeState(isCoreTechnologySubMenuOpen) : null}
                                        hasModalWindow={item.hasModalWindow}
                                        modalWindowChangeState={() => item.hasModalWindow ? handleModalWindowChangeState(modalWindowState) : null}/>
                            ))
                        }
                    </div>
                </>
            } 
            contentWrapperClass='menu-content-wrapper' />
            <CoreTechnologySubMenu state={isCoreTechnologySubMenuOpen} changeState={setIsCoreTechnologySubMenuOpen} />
        </div>
    )
}
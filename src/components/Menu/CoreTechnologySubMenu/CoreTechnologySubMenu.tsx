import ROKKAFrame from '../../ROKKAFrame/ROKKAFrame'
import './CoreTechnologySubMenu.scss'
import { CoreTechnologySubMenuItems } from '../../../content/menu/menu_content'
import MenuItem from '../MenuItem/MenuItem'

export default function CoreTechnologySubMenu({state, changeState}: {state: boolean, changeState: (state: boolean) => void}) {
    
    const handleMouseLeave = () => {
        changeState(false)
    }
    
    return (
        <div className={`core-technology-sub-menu ${state ? 'open' : 'closed'}`} onMouseLeave={handleMouseLeave}>
            <ROKKAFrame content={
                <>
                    {CoreTechnologySubMenuItems.map((item) => (
                        <MenuItem key={item.label} {...item} itemClass={`core-technology-sub-menu-item ${state ? 'open' : 'closed'} ${item.label}`} hasSubMenu={item.hasSubMenu} subMenuChangeState={() => item.hasSubMenu ? changeState(false) : null} subMenuState={state}/>
                    ))}
                </>
            } contentWrapperClass={`core-technology-sub-menu-content-wrapper ${state ? 'open' : 'closed'}`} />
        </div>
    )
}
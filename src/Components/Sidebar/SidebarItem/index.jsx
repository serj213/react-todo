import React from "react";

// components
import Badger from "../Badger";

// styles
import './SidebarItem.scss';

import iconImg from '../../../assets/images/icon.svg';



const SidebarItem = ({ active = false, icon, name, color = false }) => {

    return (
        <div className={`itemSidebar ${active && 'itemSidebar__active'}`}>
            {icon && <img src={iconImg} alt="" />}
            {
                color && <Badger color={color} />
            }
            <span>{name}</span>
        </div>
    )
}

export default SidebarItem;
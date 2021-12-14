import React from "react";
import './SidebarItem.scss';

import iconImg from '../../../assets/images/icon.svg';

const SidebarItem = ({ active = false, icon, name }) => {

    console.log(active);

    return (
        <div className={`itemSidebar ${active && 'itemSidebar__active'}`}>
            {icon && <img src={iconImg} alt="" />}
            <span>{name}</span>
        </div>
    )
}

export default SidebarItem;
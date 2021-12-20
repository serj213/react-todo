import React from "react";

// components
import Badger from "../Badger";

// styles
import './SidebarItem.scss';

// images
import iconImg from '../../../assets/images/icon.svg';
import removeImg from '../../../assets/images/remove.svg';



const SidebarItem = ({ active = false, 
    icon, name, 
    color = false,
     isRemovable = false,
     onRemove,
     tasksCount = [],
     lists = false ,
     ClickItems
    }) => {

    return (
        <div onClick={ClickItems} className={`itemSidebar ${active && 'itemSidebar__active'}`}>
            {icon && <img src={iconImg} alt="" />}
            {
                color && <Badger color={color} />
            }
            <span>{name}</span>
            <span>
                {
                    lists ?
                        '(' + tasksCount.length + ')' : ''
                }
            </span>

            {
                isRemovable && <button onClick={onRemove} className="itemSidebar__remove">
                    <img src={removeImg} alt="" />
                </button>
            }
        </div>
    )
}

export default SidebarItem;
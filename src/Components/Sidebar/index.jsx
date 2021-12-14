import React from "react";

// styles
import './sidebar.scss';

//components

import SidebarItem from "./SidebarItem";

// images

import iconImg from '../../assets/images/icon.svg';


const Sidebar = () => {


    const allTalks = [
        {
            name: 'Все задачи',
            icon: iconImg
        }

    ]





    const talksList = [
        {
            id: 0,
            name: 'Покупки',
            color: 'green'
        },

        {
            id: 1,
            name: 'Фронтенд',
            color: 'blue'
        },
        {
            id: 2,
            name: 'Фильмы и сериалы',
            color: 'pink'
        },
        {
            id: 3,
            name: 'Книги',
            color: 'green'
        },
        {
            id: 4,
            name: 'Личное',
            color: 'grey'
        }
    ]





    return (

        <aside className="sidebar">
            <div className="sidebar__top">

                {
                    allTalks.map(item => {
                        return <SidebarItem name={item.name} icon={item.icon} />
                    })
                }

            </div>


            <div className="sidebar__middle">

                <SidebarItem />
                <SidebarItem />
                <SidebarItem active={true} />
                <SidebarItem />
                <SidebarItem />
            </div>

            <div className="sidebar__bottom">

            </div>
        </aside>
    )
}

export default Sidebar;
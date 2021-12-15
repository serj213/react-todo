import React from "react";
import DB from '../../assets/db.json';

// styles
import './sidebar.scss';

//components

import SidebarItem from "./SidebarItem";

// images

import iconImg from '../../assets/images/icon.svg';
import addIcon from '../../assets/images/add.svg';
import AddFolder from "./AddFolder";

const Sidebar = () => {

    const talksList = DB.lists;




    const [addFolder, setAddFolder] = React.useState(true);
    const [lists, setLists] = React.useState(DB.lists);

    




    const onShowPopup = () => {
        setAddFolder(true)
    }




    const allTalks = [
        {
            name: 'Все задачи',
            icon: iconImg
        }

    ]



    const addTalk = obj => {
        const newList = [...lists, obj];
        console.log(lists, newList);
        setLists(newList);
    }






    return (

        <aside className="sidebar">
            <div className="sidebar__top">
                {
                    allTalks.map(item => {
                        return <SidebarItem key={item.id} name={item.name} icon={item.icon} />
                    })
                }
            </div>


            <div className="sidebar__middle">
                {
                    talksList.map((item, index) => {
                        return <SidebarItem key={index}
                            name={item.name}
                            color={DB.colors.filter(colorItem => item.colorId === colorItem.id)[0].name}
                        />
                    })
                }
            </div>

            <div className="sidebar__bottom">

                <button onClick={onShowPopup} className="sidebar__add-folder">
                    <img src={addIcon} alt="" />
                    <span>
                        Добавить папку
                    </span>
                </button>

                {
                    addFolder && <AddFolder
                        add={addTalk}
                        colorsList={DB.colors}
                    />
                }

            </div>


        </aside>
    )
}

export default Sidebar;
import React from "react";
import axios from "axios";

// styles
import './sidebar.scss';

//components

import SidebarItem from "./SidebarItem";
import ListsMiddle from "./ListsMiddle";
// images

import iconImg from '../../assets/images/icon.svg';
import addIcon from '../../assets/images/add.svg';
import AddFolder from "./AddFolder";

const Sidebar = () => {

    const [addFolder, setAddFolder] = React.useState(false);
    const [lists, setLists] = React.useState(null);
    const [colors, setColors] = React.useState(null);



    React.useEffect(() => {

        axios.get('http://localhost:3001/lists').then(({ data }) => {
            setLists(data);
        })

        axios.get('http://localhost:3001/colors').then(({ data }) => {
            setColors(data);
        })
        console.log('юз эффект');
    }, []);





    const onShowPopup = () => {
        setAddFolder(true);

    }

    const onHiddenPopup = () => {
        setAddFolder(false);
    }

    const allTalks = [
        {
            name: 'Все задачи',
            icon: iconImg
        }

    ]

    const addTalk = obj => {
        const newList = [...lists, obj];
        setLists(newList);
        setAddFolder(false);
    }

    const onRemove = obj => {

        if (window.confirm('действительно хотите удалить?')) {
            const deleteList = obj.id;
            axios.delete('http://localhost:3001/lists/' + obj.id);
            const newList = lists.filter(item => item.id !== obj.id);
            setLists(newList);
        }

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

                <ListsMiddle lists={lists} colors={colors} onRemove={onRemove} />

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
                        colorsList={colors}
                        hiddenPopup={onHiddenPopup}
                    />
                }
            </div>
        </aside>
    )
}

export default Sidebar;
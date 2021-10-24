import React, { useState } from "react";
import styles from './Sidebar.module.scss';

import List from "./List/List";
import AddFolder from "./List/AddFolder/AddFolder";
import FolderPopup from "./FolderPopup/FolderPopup";

const Sidebar = props => {

    const allTalksListInfo = [
        {
            icon: 'icon',
            name: 'Все задачи',
        },
    ]

    const typeTalk = [
        {
            name: 'Покупки',
            colors: 'green'
        },

        {
            name: 'Фронтенд',
            colors: 'blue',

        },

        {
            name: 'Фильмы',
            colors: 'pink',
            active: true

        },

        {
            name: 'Книги',
            colors: 'darkGreen'
        },

        {
            name: 'Личное',
            colors: 'purpur'

        }
    ]

    const [addFolder, setAddFolder] = useState(true);

    const openPopup = () => {
        setAddFolder(true);
    }

    const closePopup = () => {
        setAddFolder(false);

    }

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebar__allTalks}>
                <List dataList={allTalksListInfo} />
            </div>

            <div className={styles.sidebar__type}>
                <List dataList={typeTalk} />
            </div>

            <div className={styles.sidebar__addPapka}>
                <AddFolder openPopup={openPopup} />

                {
                    addFolder && <FolderPopup closePopup={closePopup} />
                }

            </div>



        </aside>
    )

}

export default Sidebar;
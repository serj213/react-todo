import React from "react";
import styles from './List.module.scss';

const List = props => {


    return <ul className={styles.list}>

        {
            props.dataList.map(({ icon, colors, name, active, index}) => {

                return <li key={index} className={`${styles.item} ${active && styles.active}  
                        ${icon === 'icon' ? styles.icon : styles[colors]}`}>
                    {name}
                </li>

            })
        }


    </ul>
}

export default List;
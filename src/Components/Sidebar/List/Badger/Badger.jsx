import React from "react";
import styles from './Badger.module.scss';

const Badger = ({ color, onClick, active }) => {
    return <i className={`${styles.item} ${styles[color]} ${styles[active]}`} onClick={onClick}  ></i>
}

export default Badger;
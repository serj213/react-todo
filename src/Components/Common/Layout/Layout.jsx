import React from "react";
import styles from './Layout.module.scss';

const Layout = props => {
    return <div className={styles.wrapper}>
        {props.children}
    </div>
}

export default Layout;
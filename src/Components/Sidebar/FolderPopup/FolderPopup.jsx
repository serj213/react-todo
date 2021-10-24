import React, { useState } from "react";
import styles from './FolderPopup.module.scss';

import closeImg from '../../assets/sidebar/close.svg';
import Button from "../../Common/Button/Button";
import bd from '../../assets/db.json';
import Badger from "../List/Badger/Badger";

const FolderPopup = ({ closePopup }) => {

    const colors = bd.colors;

    const [colorState, setColorState] = useState(null);

    const colorStateHandler = (colorsId) => {
        setColorState(colorsId);
    }


    return (
        <div className={styles.popup}>

            <img onClick={closePopup} className={styles.close} src={closeImg} alt="close" />


            <input type="text" placeholder='Название папки' />

            <ul className={styles.popup__colors}>

                {
                    colors.map(item => {
                        return <Badger key={item.id} color={item.name} colorState={colorState} 
                        onClick={() => colorStateHandler(item.id)} 
                        active ={ colorState === item.id && 'active'}
                        
                        />
                    })
                }

            </ul>

            <Button>
                Добавить
            </Button>
        </div>
    )
}

export default FolderPopup;
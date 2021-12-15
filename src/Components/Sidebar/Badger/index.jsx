import React from "react";
import './badger.scss';


const Badger = ({ color = false, folder = false, colorsFolder = false, changeActiveColor, active = false }) => {




    return (
        <div className={`badger-color
        ${folder && 'falder-badger'}
         ${color && color}
         ${colorsFolder && colorsFolder}
         ${active && 'active'}
        `} onClick={changeActiveColor} />
    )
}

export default Badger;
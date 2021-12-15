import React from "react";

// components

import Button from "../../Common/Button";
import Badger from "../Badger";

// styles

import './addFolder.scss';


const AddFolder = ({ colorsList,
    add,
}) => {

    const [inputValue, setInputValue] = React.useState('');

    const [activeColor, setActiveColor] = React.useState(1);

    const changeActiveColor = id => {
        setActiveColor(id);
    }


    const changeInputValue = e => {
        setInputValue(e.target.value);
    }

    const addTaks = () => {
        if (!inputValue) {
            alert('введите название');
            return
        }

        add({ id: Math.random(), name: inputValue, colorId: activeColor })
        setInputValue('');
        setActiveColor(1);

    }


    return (
        <div className="popup">
            <input value={inputValue} onChange={(e) => changeInputValue(e)} type="text" placeholder="Название папки" />
            <div className="popup__colors">

                {
                    colorsList.map(colorItem => {
                        return <Badger key={colorItem.id}
                            active={activeColor === colorItem.id && true}
                            changeActiveColor={() => changeActiveColor(colorItem.id)}
                            folder
                            colorsFolder={colorItem.name} />
                    })
                }

            </div>

            <Button addTask={addTaks}>
                Добавить
            </Button>
        </div>
    )
}

export default AddFolder;
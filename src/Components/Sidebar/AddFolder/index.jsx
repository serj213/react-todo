import React from "react";
import axios from "axios";

// components

import Button from "../../Common/Button";
import Badger from "../Badger";

// styles
import './addFolder.scss';

// images

import closeImg from '../../../assets/images/close.svg';


const AddFolder = ({ colorsList,
    add,
    hiddenPopup
}) => {

    const [inputValue, setInputValue] = React.useState('');
    const [activeColor, setActiveColor] = React.useState(1);
    const [isLoading, setIsLoading] = React.useState(false);

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
        setIsLoading(true);

        axios.post('http://localhost:3001/lists', {
            name: inputValue,
            colorId: activeColor
        })
            .then(({ data }) => {
                add(data);

            });
        setIsLoading(false);

        setInputValue('');
        setActiveColor(1);
    }


    return (
        <div className="popup">
            <button onClick={hiddenPopup} className="popup__close">
                <img src={closeImg} alt="" />
            </button>

            <input value={inputValue} onChange={(e) => changeInputValue(e)} type="text" placeholder="Название папки" />
            <div className="popup__colors">

                {
                    colorsList &&
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
                {
                    isLoading ? '...Добавляется' : 'Добавить'
                }


            </Button>
        </div>
    )
}

export default AddFolder;
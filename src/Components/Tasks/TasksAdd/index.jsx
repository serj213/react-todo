import React from 'react';



import './TasksAdd.scss';

import addIcon from '../../../assets/images/add.svg';
import closeIcon from '../../../assets/images/close.svg';

const TasksAdd = ({ taskPopup,
     visibleTaskPopup,
     hiddenTaskPopup,
     changeInput,
     input,
     add
 }) => {
    return (

        <>

            {
                !taskPopup ?

                    <button onClick={visibleTaskPopup} className='add-task'>
                        <img src={addIcon} alt="" />
                        <span>Новая задача</span>
                    </button>

                    :

                    <div className='add-task__form'>
                        <input type="text" placeholder='Текст задачи' value={input} onChange={(e) => changeInput(e)} />
                        <div>
                            <button onClick={add} className='add-task__btn add-task__btn--green'>Добавить задачу</button>
                            <button onClick={hiddenTaskPopup} className='add-task__btn add-task__btn--gray'>Отмена</button>
                        </div>

                        <button onClick={hiddenTaskPopup} className='add-task__close'>
                            <img src={closeIcon} alt="" />
                        </button>

                    </div>
            }

        </>
    )
}

export default TasksAdd;

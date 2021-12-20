import React from "react";

import './taskItem.scss';
import checkImg from '../../../assets/images/check.svg';

const TaskItem = ({taskText, key}) => {
    return (
        <div className="task-item">
            <div className="task-item__checkbox">
                <input type="checkbox" id={`${taskText} ${key}`} />
                <label htmlFor={`${taskText} ${key}`}>
                    <img src={checkImg} alt="" />
                </label>
            </div>

            <div className="task-item__name">
                {taskText}
            </div>
        </div>
    )
}

export default TaskItem;
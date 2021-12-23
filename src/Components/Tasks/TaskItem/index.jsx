import React from "react";

import './taskItem.scss';
import checkImg from '../../../assets/images/check.svg';
import remove from '../../../assets/images/task-remove.svg';

const TaskItem = ({taskText, key, taskRemove}) => {
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

            <img onClick={taskRemove} className="task-item__remove" src={remove} alt="" />
        </div>
    )
}

export default TaskItem;
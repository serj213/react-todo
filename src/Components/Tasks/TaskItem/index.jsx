import React from "react";

import './taskItem.scss';
import checkImg from '../../../assets/images/check.svg';

const TaskItem = () => {
    return (
        <div className="task-item">
            <div className="task-item__checkbox">
                <input type="checkbox" id='first' />
                <label htmlFor="first">
                    <img src={checkImg} alt="" />
                </label>
            </div>

            <div className="task-item__name">
                ReactJS Hooks (useState, useReducer, useEffect и т.д.)
            </div>
        </div>
    )
}

export default TaskItem;
import React from "react";

// comonents

import TaskItem from "./TaskItem";

// styles

import './tasks.scss';


const Tasks = () => {


    return (
        <div className="tasks">
            <div className="tasks__title">
                <input type="text" value='фронтенд' />
            </div>

            <div className="tasks__list tasks-list">

                <TaskItem />
                
            </div>

        </div>
    )
}

export default Tasks;
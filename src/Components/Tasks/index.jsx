import React from "react";
import EmtyTasks from "./EmtyTasks";
import axios from "axios";

// comonents

import TaskItem from "./TaskItem";

// styles

import './tasks.scss';

// images

import editIcon from '../../assets/images/edit.svg';
import TasksAdd from "./TasksAdd";


const Tasks = ({ selectedList, editTitle }) => {

    const [taskPopup, setTaskPopup] = React.useState(false);


    const showTaskPopup = () => {
        setTaskPopup(true);
    }

    const hiddenTaskPopup = () => {
        setTaskPopup(false);
    }



    const onEditTitle = () => {

        const newTitle = window.prompt('Введите название', selectedList.name);

        console.log('selectedList.id', selectedList.id);


        if (newTitle) {
            editTitle(newTitle, selectedList.id);
            axios.patch('http://localhost:3001/lists/' + selectedList.id, {
                name: newTitle
            }).catch(() => {
                alert('Не удалось отправить');
            })
        }


    }


    return (
        <>

            {
                selectedList && selectedList.tasks.length > 0 ?

                    <div className="tasks">
                        <div className="tasks__title">
                            {selectedList.name}
                            <button onClick={onEditTitle} className="tasks__edit-title">
                                <img src={editIcon} alt="" />
                            </button>
                        </div>

                        <div className="tasks__list tasks-list">

                            {
                                selectedList.tasks.map(item => {
                                    return <TaskItem key={item.id}
                                        taskText={item.text}

                                    />
                                })
                            }
                        </div>

                        <div className="tasks__add">
                            <TasksAdd
                                hiddenTaskPopup={hiddenTaskPopup}
                                taskPopup={taskPopup}
                                visibleTaskPopup={showTaskPopup}
                            />
                        </div>

                    </div>
                    :

                    <EmtyTasks />

            }

        </>




    )
}

export default Tasks;
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


const Tasks = ({ selectedList, editTitle, addTaks, lists, setLists }) => {

    const [taskPopup, setTaskPopup] = React.useState(false);
    const [inputValueTask, setInputValueTask] = React.useState('');

    const changeInput = e => {
        setInputValueTask(e.target.value);
    }


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

    const taskAdd = () => {

        const newObj = {
            listId: selectedList.id,
            text: inputValueTask,
            completed: false,
        };

        axios.post('http://localhost:3001/tasks/', {
            listId: selectedList.id,
            text: inputValueTask,
            completed: false,
        })

            .then(() => {
                addTaks(newObj, selectedList.id);
            })

            .catch(() => {
                alert('не удалось выполнить запрос');

            });

    }

    const taskRemove = (obj) => {

        axios.delete('http://localhost:3001/tasks/' +  obj.id)
        .catch(() => {
            alert('не удалось выполнить запрос');
        });

        const newList = lists.map(item => {
            
            if(item.id === selectedList.id){
                const tasksItem = item.tasks;
                const newTasksList = tasksItem.filter(objTask => objTask.id !== obj.id);
                item.tasks = newTasksList;
            }

            return item;
        });

        setLists(newList);

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
                                        taskRemove={() => taskRemove(item)}

                                    />
                                })
                            }
                        </div>

                        <div className="tasks__add">
                            <TasksAdd
                                hiddenTaskPopup={hiddenTaskPopup}
                                taskPopup={taskPopup}
                                visibleTaskPopup={showTaskPopup}
                                changeInput={changeInput}
                                input={inputValueTask}
                                add={taskAdd}
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
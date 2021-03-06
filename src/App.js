import React from "react";
import axios from "axios";

import Layout from "./Components/Common/Layout";
import Sidebar from "./Components/Sidebar";
import Tasks from "./Components/Tasks";


const App = () => {

  const [lists, setLists] = React.useState(null);
  const [colors, setColors] = React.useState(null);
  const [selectedList, setSelectedList] = React.useState(null);

  React.useEffect(() => {

    axios.get('http://localhost:3001/lists?_expand=color&_embed=tasks').then(({ data }) => {
      setLists(data);
    })

    axios.get('http://localhost:3001/colors').then(({ data }) => {
      setColors(data);
    })

  }, []);

  const editTitle = (name, id) => {

    const newList = lists.map(item => {

      if (item.id === id) {
        item.name = name;
      }

      return item;
    });

    setLists(newList);

  }

  const clickItem = (item) => {
    setSelectedList(item);
  }



  const addTaks = (tasksObj, listId) => {
    const newTasks = lists.map(item => {

      if (item.id === listId) {

        item.tasks = [...item.tasks, tasksObj];
      }

      return item;

    });

    setLists(newTasks); 
  }

  const RemoveTask = (tasksObj, listId) => {

    
  }




  return (
    <div>
      <Layout>
        <Sidebar
          lists={lists}
          colors={colors}
          setLists={setLists}
          setColors={setColors}
          clickItem={clickItem}
        />
        {
          lists && <Tasks lists={lists}
            selectedList={selectedList}
            editTitle={(name, id) => editTitle(name, id)}
            addTaks={addTaks}
            RemoveTask={RemoveTask}
            setLists={setLists}
          />
        }
      </Layout>
    </div>
  )
}

export default App;

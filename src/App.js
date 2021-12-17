import React from "react";
import axios from "axios";

import Layout from "./Components/Common/Layout";
import Sidebar from "./Components/Sidebar";
import Tasks from "./Components/Tasks";


const App = () => {

  const [lists, setLists] = React.useState(null);
  const [colors, setColors] = React.useState(null);

  React.useEffect(() => {

    axios.get('http://localhost:3001/lists?_expand=color&_embed=tasks').then(({ data }) => {
      setLists(data);
    })

    axios.get('http://localhost:3001/colors').then(({ data }) => {
      setColors(data);
    })

  }, []);


  return (
    <div>
      <Layout>
        <Sidebar
          lists={lists}
          colors={colors}
          setLists={setLists}
          setColors={setColors} />
        {
          lists && <Tasks lists={lists}
          />
        }
      </Layout>
    </div>
  )
}

export default App;

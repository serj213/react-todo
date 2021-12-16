import React from "react";

import Layout from "./Components/Common/Layout";
import Sidebar from "./Components/Sidebar";
import Tasks from "./Components/Tasks";


const App = () => {
  return (
    <div>
      <Layout>
        <Sidebar />
        <Tasks />
      </Layout>
    </div>
  )
}

export default App;

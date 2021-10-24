import React from "react";
import styles from './App.module.scss';

import Layout from "./Components/Common/Layout/Layout";
import Sidebar from "./Components/Sidebar/Sidebar";


const App = () => {
  return (
    <Layout>
      <section className={styles.todo}>
        <div className={styles.todo__box}>
          <Sidebar />
        </div>
      </section>
    </Layout>
  )
}

export default App;

import React from "react";
import { Router } from "react-router-dom";
import history from "./utils/@history";
import routes from "./config/routesConfig";
import AppContext from "./AppContext";
import "./App.css";
import Layout from "./components/ui/layout/layout";

function App() {
  return (
    <AppContext.Provider value={{ routes }}>
      <Router history={history}>
        <Layout />
      </Router>
    </AppContext.Provider>
  );
}

export default App;

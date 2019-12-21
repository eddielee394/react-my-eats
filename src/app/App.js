import React from "react";
import { Router } from "react-router-dom";
import jssExtend from "jss-extend";
import { create } from "jss";
import {
  StylesProvider,
  jssPreset,
  createGenerateClassName
} from "@material-ui/styles";
import history from "./utils/@history";
import routes from "./config/routesConfig";
import AppContext from "./AppContext";
import Layout from "./components/ui/layout/layout";
import Theme from "./components/ui/theme/theme";
import { toast } from "react-toastify";

toast.configure({ toastClassName: "rounded" });

const jss = create({
  ...jssPreset(),
  plugins: [...jssPreset().plugins, jssExtend()],
  insertionPoint: document.getElementById("jss-insertion-point")
});

const generateClassName = createGenerateClassName();

function App() {
  return (
    <AppContext.Provider value={{ routes }}>
      <StylesProvider jss={jss} generateClassName={generateClassName}>
        <Router history={history}>
          <Theme>
            <Layout />
          </Theme>
        </Router>
      </StylesProvider>
    </AppContext.Provider>
  );
}

export default App;

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
import AppContext from "./appContext";
import Layout from "./components/ui/layout/layout";
import Theme from "./components/ui/theme/theme";
import { toast } from "react-toastify";
import { APP_CONFIG } from "./config/appConfig";

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
      {console.log("process.env: ", process.env)}
      <StylesProvider jss={jss} generateClassName={generateClassName}>
        <Router history={history} basename={APP_CONFIG.appUrl}>
          <Theme>
            <Layout />
          </Theme>
        </Router>
      </StylesProvider>
    </AppContext.Provider>
  );
}

export default App;

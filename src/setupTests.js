import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import AppContext from "./app/appContext";
import routes from "./app/config/routesConfig";
import { StylesProvider } from "@material-ui/styles";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Theme from "./app/components/ui/theme/theme";
import React from "react";
import { toast } from "react-toastify";

const Providers = ({ children }) => {
  const history = createMemoryHistory();
  toast.configure({ toastClassName: "rounded" });
  
  return (
    <AppContext.Provider value={{ routes }}>
      <StylesProvider>
        <Router history={history}>
          <Theme>{children}</Theme>
        </Router>
      </StylesProvider>
    </AppContext.Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";
export * from "@testing-library/jest-dom/extend-expect";

// override render method
export { customRender as render };

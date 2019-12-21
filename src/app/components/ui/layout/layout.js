import React, { useContext } from "react";
import { renderRoutes } from "react-router-config";
import AppContext from "../../../AppContext";
import Suspense from "../suspense";

function Layout(props) {
  const appContext = useContext(AppContext);
  const { routes } = appContext;

  return (
    <div className="app-container">
      <Suspense>{renderRoutes(routes)}</Suspense>
    </div>
  );
}

export default Layout;

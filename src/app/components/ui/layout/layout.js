import React, { useContext } from "react";
import { renderRoutes } from "react-router-config";
import AppContext from "../../../AppContext";
import Suspense from "../suspense";
import { makeStyles } from "@material-ui/core/styles";
import Heading from "./heading";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary
  },
  content: {
    flex: "1 1 auto",
    "-webkit-overflow-scrolling": "touch",
    zIndex: 2
  }
}));

function Layout(props) {
  const appContext = useContext(AppContext);
  const classes = useStyles(props);
  const { routes } = appContext;

  return (
    <div
      className={clsx(
        classes.root,
        "flex flex-row relative overflow-hidden w-full h-full"
      )}
    >
      <div className="max-w-screen flex flex-1 flex-col overflow-auto relative items-center">
        <Heading />
        <div
          className={clsx(
            classes.content,
            "flex relative overflow-auto flex-col items-center w-full "
          )}
        >
          <Suspense>{renderRoutes(routes)}</Suspense>
        </div>
      </div>
    </div>
  );
}

export default Layout;

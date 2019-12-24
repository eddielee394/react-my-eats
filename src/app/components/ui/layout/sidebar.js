import clsx from "clsx";
import StickyBox from "react-sticky-box";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  col: {
    padding: theme.spacing(1.25),
    marginTop: theme.spacing(1.25),
    marginBottom: theme.spacing(1.25)
  },
  widget: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

function Sidebar(props) {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.col, "flex flex-col")}>
      <StickyBox offsetTop={10} offsetBottom={20}>
        <div className="sidebar-container">
          {React.Children.toArray(
            children.map(child => (
              <Paper className={clsx(classes.widget)}>{child}</Paper>
            ))
          )}
        </div>
      </StickyBox>
    </div>
  );
}

export default Sidebar;

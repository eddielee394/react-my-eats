import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import StickyBox from "react-sticky-box";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  col: {
    padding: theme.spacing(1.25),
    marginTop: theme.spacing(1.25),
    marginBottom: theme.spacing(1.25)
  },
  widget: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
    overflow: "hidden"
  }
}));

function Sidebar({ children, widgetClasses = "", colSize = "1/5", ...props }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(
        classes.col,
        `flex flex-col w-full sm:w-${colSize} sidebar-container`
      )}
    >
      <StickyBox offsetTop={10} offsetBottom={20}>
        <div className="widget-container">
          {React.Children.map(children, child => (
            <Paper className={clsx(classes.widget, widgetClasses)}>
              {child}
            </Paper>
          ))}
        </div>
      </StickyBox>
    </div>
  );
}

Sidebar.propTypes = {
  // children: PropTypes.element.isRequired,
  colSize: PropTypes.string,
  widgetClasses: PropTypes.string
};

export default Sidebar;

import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  userCaption: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem"
    }
  }
}));

function UserStatsWidget({ className, user, ...props }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(
        className,
        "flex md:flex-row flex-1 justify-around md:justify-between"
      )}
    >
      <div className="flex flex-col items-center">
        <Typography className={classes.userCaption} variant="subtitle2">
          {user.stats.recipes}
        </Typography>
        <Typography variant="caption">Recipes</Typography>
      </div>
      <div className="flex flex-col items-center">
        <Typography className={classes.userCaption} variant="subtitle2">
          {user.stats.savedRecipes}
        </Typography>
        <Typography variant="caption">Saved</Typography>
      </div>
      <div className="flex flex-col items-center">
        <Typography className={classes.userCaption} variant="subtitle2">
          {user.stats.following}
        </Typography>
        <Typography variant="caption">Following</Typography>
      </div>
    </div>
  );
}

UserStatsWidget.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object
};

export default UserStatsWidget;

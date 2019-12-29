import React from "react";
import PropTypes from "prop-types";
import { Button, Chip, Typography, makeStyles } from "@material-ui/core";
import { showNotification } from "../../../utils/helpers";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  recipeTime: {
    color: theme.palette.grey["900"]
  }
}));

const RecipeDetailHeading = ({ title, prepTime, cookTime }) => {
  const classes = useStyles();

  return (
    <div className="w-full md:flex justify-between my-8">
      <div className="flex flex-col items-center md:items-stretch w-full md:w-2/3">
        <Typography variant="h4" className="recipe-title">
          {title}
        </Typography>
        <div className="flex my-5">
          <Chip
            icon={<AccessTimeIcon color="primary" />}
            label={`Prep time: ${prepTime} mins`}
            size="small"
            variant="outlined"
            className={clsx(classes.recipeTime, "ml-2")}
          />
          <Chip
            icon={<AccessTimeIcon color="primary" />}
            label={`Cook time: ${cookTime} mins`}
            size="small"
            variant="outlined"
            className={clsx(classes.recipeTime, "ml-2")}
          />
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/3 self-center">
        <div className="flex flex-row justify-center">
          <Button
            onClick={showNotification}
            size="medium"
            variant="contained"
            color="primary"
          >
            Start Cooking
          </Button>
        </div>
      </div>
    </div>
  );
};

RecipeDetailHeading.propTypes = {
  title: PropTypes.string.isRequired,
  prepTime: PropTypes.number,
  cookTime: PropTypes.number
};

RecipeDetailHeading.defaultProps = {
  title: "",
  images: {}
};

export default RecipeDetailHeading;

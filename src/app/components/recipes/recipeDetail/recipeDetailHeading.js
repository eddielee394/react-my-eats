import React from "react";
import PropTypes from "prop-types";
import { Button, Typography } from "@material-ui/core";

const RecipeDetailHeading = ({ title }) => {
  return (
    <div className="w-full flex justify-between my-8 mb-10">
      <div className="w-3/5 md:w-4/5">
        <Typography variant="h4" className="recipe-title">
          {title}
        </Typography>
      </div>
      <div className="w-2/5 md:w-1/5 self-center">
        <Button variant="contained" color="primary">
          Start Cooking
        </Button>
      </div>
    </div>
  );
};

RecipeDetailHeading.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.object.isRequired
};

RecipeDetailHeading.defaultProps = {
  title: "",
  images: {}
};

export default RecipeDetailHeading;

import React from "react";
import PropTypes from "prop-types";
import Suspense from "../../ui/suspense";

const RecipeDetailHeading = ({ title }) => {
  return (
    <div className="recipe-heading-container">
      <div className="recipe-title">{title}</div>
      <div className="recipe-edit-btn">Edit Recipe btn</div>
      <div className="recipe-start-btn">Start Cooking btn</div>
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

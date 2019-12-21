import React from "react";
import PropTypes from "prop-types";
import Suspense from "../../ui/suspense";

const RecipeDetailHeading = ({ title, images }) => {
  return (
    <div className="recipe-heading-container">
      <Suspense loader loadingProps={{ isLoading: !images.full }}>
        <img alt={title} src={images.full} />
      </Suspense>
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

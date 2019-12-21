import React from "react";
import PropTypes from "prop-types";

const RecipeDetailDirections = ({ directions }) => {
  return (
    <div className="recipe-directions-container">
      <div>Recipe Directions</div>
      {directions.map((direction, index) => (
        <div key={index}>
          <span>#{index + 1} </span>
          {direction.instructions}
        </div>
      ))}
    </div>
  );
};

RecipeDetailDirections.propTypes = {
  directions: PropTypes.arrayOf(PropTypes.object).isRequired
};

RecipeDetailDirections.defaultProps = {
  directions: []
};

export default RecipeDetailDirections;

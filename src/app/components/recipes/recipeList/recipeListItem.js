import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function RecipeListItem({ recipe }) {
  return (
    <div className="item-container">
      <div className="item">
        <div className="image-container">
          <img alt={recipe.title} src={recipe.images.medium} />
        </div>
        <div>
          <Link to={`/recipes/${recipe.uuid}`}>Title: {recipe.title}</Link>
        </div>
        <div>Description: {recipe.description}</div>
        <div>Prep time: {recipe.prepTime}</div>
        <div>Cook time: {recipe.cookTime}</div>
        <div>Post Date: {recipe.postDate}</div>
      </div>
    </div>
  );
}

RecipeListItem.propTypes = {
  recipe: PropTypes.object.isRequired
};

export default RecipeListItem;

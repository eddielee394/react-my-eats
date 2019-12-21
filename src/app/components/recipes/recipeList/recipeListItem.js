import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Suspense from "../../ui/suspense";

function RecipeListItem({ recipe }) {
  return (
    <div className="item-container">
      <div className="item">
        <div className="image-container">
          <Suspense loader loadingProps={{ isLoading: !recipe.images.medium }}>
            <img alt={recipe.title} src={recipe.images.medium} />
          </Suspense>
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

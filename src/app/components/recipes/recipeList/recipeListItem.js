import React from "react";
import CardItemLoader from "../../ui/loaders/cardItemLoader";

function RecipeListItem({ recipe, isLoading }) {
  const _renderItem = (
    <div className="item">
      <div className="image-container">
        <img alt={recipe.title} src={recipe.images.medium} />
      </div>
      <div>Title: {recipe.title}</div>
      <div>Description: {recipe.description}</div>
      <div>Prep time: {recipe.prepTime}</div>
      <div>Cook time: {recipe.cookTime}</div>
      <div>Post Date: {recipe.postDate}</div>
    </div>
  );

  return (
    <div className="item-container">
      {isLoading ? <CardItemLoader /> : _renderItem}
    </div>
  );
}

export default RecipeListItem;

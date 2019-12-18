import React from "react";
import CardItemLoader from "../../ui/loaders/cardItemLoader";

function RecipeListItem(props) {
  const { recipe, isLoading } = props;

  const _renderItem = () =>
    isLoading ? (
      <CardItemLoader />
    ) : (
      <div className="item">
        <div className="image-container">
          <img src={`http://localhost:3001${recipe.images.medium}`} />
        </div>
        <div>Title: {recipe.title}</div>
        <div>Description: {recipe.description}</div>
        <div>Prep time: {recipe.prepTime}</div>
        <div>Cook time: {recipe.cookTime}</div>
        <div>Post Date: {recipe.postDate}</div>
      </div>
    );

  return <div className="item-container">{_renderItem()}</div>;
}

export default RecipeListItem;

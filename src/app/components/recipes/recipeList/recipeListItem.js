import React, { useMemo } from "react";
import CardItemLoader from "../../ui/loaders/cardItemLoader";

function RecipeListItem({ recipe, specials, isLoading }) {
  const { ingredients } = recipe;

  const filteredIngredientSpecials = useMemo(
    () =>
      specials.filter(special =>
        ingredients.some(ingredient => special.ingredientId === ingredient.uuid)
      ),
    [ingredients, specials]
  );

  const hasIngredientSpecial = filteredIngredientSpecials.length > 0;

  const _renderIngredientSpecial = ({ uuid }) => {
    const special = filteredIngredientSpecials.find(
      _special => _special.ingredientId === uuid
    );

    if (special !== undefined) {
      return (
        <div className="filtered-special-container">
          <div>Specials:</div>
          <div>{special.title}</div>
          <div>{special.type}</div>
          <div>{special.text}</div>
        </div>
      );
    }
  };

  const _renderItem = (
    <div className="item">
      <div className="image-container">
        <img src={`http://localhost:3001${recipe.images.medium}`} />
      </div>
      <div>Title: {recipe.title}</div>
      <div>Description: {recipe.description}</div>
      <div>Prep time: {recipe.prepTime}</div>
      <div>Cook time: {recipe.cookTime}</div>
      <div>Post Date: {recipe.postDate}</div>
      <div className="ingredients-container">
        {hasIngredientSpecial && (
          <div>
            {filteredIngredientSpecials.length} ingredient specials available
          </div>
        )}
        <div>Ingredients:</div>
        {ingredients.map(ingredient => (
          <div key={ingredient.uuid}>
            <div>{ingredient.name}</div>
            {hasIngredientSpecial && _renderIngredientSpecial(ingredient)}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="item-container">
      {isLoading ? <CardItemLoader /> : _renderItem}
    </div>
  );
}

export default RecipeListItem;

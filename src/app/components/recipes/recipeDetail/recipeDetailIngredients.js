import React from "react";
import PropTypes from "prop-types";

const RecipeDetailIngredients = ({ ingredients, specials }) => {
  const hasIngredientSpecials = specials.length > 0;

  const _renderIngredientSpecial = ingredientId => {
    const special = specials.find(
      _special => _special.ingredientId === ingredientId
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
  return (
    <div className="recipe-ingredients-container">
      <div>Recipe Ingredients:</div>
      {ingredients.map(ingredient => (
        <div className="ingredient-container" key={ingredient.uuid}>
          <div>{ingredient.name}</div>
          <div>
            {hasIngredientSpecials && _renderIngredientSpecial(ingredient.uuid)}
          </div>
        </div>
      ))}
    </div>
  );
};

RecipeDetailIngredients.propTypes = {
  ingredients: PropTypes.array,
  specials: PropTypes.arrayOf(PropTypes.object)
};

export default RecipeDetailIngredients;

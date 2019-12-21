import React, { useEffect, useState } from "react";
import Api from "../../../services/api";
import Loader from "../../ui/loaders/loader";
import PropTypes from "prop-types";
import Suspense from "../../ui/suspense";

//Todo temporary id for testing
const id = "e80ea521-4d42-48fe-a7a6-ac8952bc0de4";

function RecipeDetail(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState({});
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const recipeResponse = await Api.getRecipe(id);
      setRecipe(recipeResponse.data);

      const specialsResponse = await Api.getIngredientSpecials(
        recipeResponse.data.ingredients
      );
      setSpecials(specialsResponse.data);

      setIsLoading(true);
    };

    getData();
  }, [id]);

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
    <div className="container">
      <Suspense isLoading={isLoading}>
        <div className="recipe-detail-container">
          <div className="recipe-heading-container">
            <div className="recipe-title">{recipe.title}</div>
            <div className="recipe-edit-btn">Edit Recipe btn</div>
            <div className="recipe-start-btn">Start Cooking btn</div>
          </div>
          <div className="recipe-ingredients-container">
            <div>Recipe Ingredients:</div>
            {recipe.ingredients &&
              recipe.ingredients.map(ingredient => (
                <div className="ingredient-container" key={ingredient.uuid}>
                  <div>{ingredient.name}</div>
                  <div>
                    {hasIngredientSpecials &&
                      _renderIngredientSpecial(ingredient.uuid)}
                  </div>
                </div>
              ))}
          </div>
          <div className="recipe-directions-container">Recipe Directions</div>
          <div className="recipe-info-container">Recipe Info</div>
        </div>
      </Suspense>
    </div>
  );
}

RecipeDetail.propTypes = {
  isLoading: PropTypes.bool,
  recipe: PropTypes.objectOf(PropTypes.shape({ ingredients: PropTypes.array })),
  specials: PropTypes.object
};

export default RecipeDetail;

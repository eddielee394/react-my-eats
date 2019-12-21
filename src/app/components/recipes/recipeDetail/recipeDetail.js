import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Api from "../../../services/api";
import RecipeDetailHeading from "./recipeDetailHeading";
import RecipeDetailIngredients from "./recipeDetailIngredients";
import RecipeDetailDirections from "./recipeDetailDirections";
import Suspense from "../../ui/suspense";

function RecipeDetail(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState({});
  const [specials, setSpecials] = useState([]);

  const { id } = props.match.params;

  useEffect(() => {
    const getData = async () => {
      const recipeResponse = await Api.getRecipe(id);

      setRecipe(recipeResponse.data);

      const specialsResponse = await Api.getIngredientSpecials(
        recipeResponse.data.ingredients
      );
      setSpecials(specialsResponse.data);

      setIsLoading(false);
    };

    getData();
  }, [id]);

  return (
    <div className="container">
      <Suspense loader loadingProps={{ isLoading: isLoading }}>
        <div className="recipe-detail-container">
          <RecipeDetailHeading images={recipe.images} title={recipe.title} />
          <RecipeDetailIngredients
            ingredients={recipe.ingredients}
            specials={specials}
          />
          <RecipeDetailDirections directions={recipe.directions} />
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

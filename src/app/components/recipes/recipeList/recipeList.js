import React, { useEffect, useState } from "react";
import Api from "../../../services/api";
import RecipeListItem from "./recipeListItem";

function RecipeList(props) {
  const [recipes, setRecipes] = useState([]);
  const [specials, setSpecials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getRecipeData = async () => {
      setIsLoading(true);
      const response = await Api.getRecipes();
      setRecipes(response.data);
      setIsLoading(false);
    };

    getRecipeData();
  }, []);

  useEffect(() => {
    const getIngredientSpecialsData = async () => {
      const response = await Api.getIngredientSpecials();
      setSpecials(response.data);
    };

    getIngredientSpecialsData();
  }, [recipes]);

  return (
    <div>
      {recipes.map(recipe => (
        <RecipeListItem
          key={recipe.uuid}
          recipe={recipe}
          specials={specials}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
}

export default RecipeList;

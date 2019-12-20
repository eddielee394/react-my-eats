import React, { useEffect, useState } from "react";
import Api from "../../../services/api";
import RecipeListItem from "./recipeListItem";

function RecipeList(props) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getRecipeData = async () => {
      const response = await Api.getRecipes();
      setRecipes(response.data);
      setIsLoading(false);
    };

    getRecipeData();
  }, []);

  return (
    <div className="container">
      {recipes.map(recipe => (
        <RecipeListItem
          key={recipe.uuid}
          recipe={recipe}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
}

export default RecipeList;

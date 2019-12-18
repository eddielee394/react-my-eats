import React, { useEffect, useState } from "react";
import Api from "../../../services/api";
import RecipeListItem from "./recipeListItem";
import CardItemLoader from "../../ui/loaders/cardItemLoader";

function RecipeList(props) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);

    const response = await Api.getRecipes();
    setRecipes(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {recipes.map(recipe => (
        <RecipeListItem
          recipe={recipe}
          key={recipe.uuid}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
}

export default RecipeList;

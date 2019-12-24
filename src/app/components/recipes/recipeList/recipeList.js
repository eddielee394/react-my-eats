import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Api from "../../../services/api";
import RecipeListItem from "./recipeListItem";
import Suspense from "../../ui/suspense";
import { toast } from "react-toastify";

function RecipeListComponent({ recipes }) {
  return recipes.map(recipe => (
    <RecipeListItem key={recipe.uuid} recipe={recipe} />
  ));
}

RecipeListComponent.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object)
};

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getRecipeData = async () => {
      setIsLoading(true);

      const response = await Api.getRecipes();

      if (response.error) {
        setIsLoading(true);

        toast.error(response.data.message, {
          autoClose: false
        });

        console.log("error response", response);
      } else {
        setRecipes(response.data);

        setIsLoading(false);
      }
    };

    getRecipeData();
  }, []);

  return (
    <Suspense
      loader
      loadingProps={{
        isLoading: isLoading,
        loaderType: "cardItemLoader",
        type: "blogList"
      }}
    >
      <RecipeListComponent recipes={recipes} />
    </Suspense>
  );
}

export default RecipeList;

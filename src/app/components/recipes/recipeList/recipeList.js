import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Api from "../../../services/api";
import RecipeListItem from "./recipeListItem";
import Suspense from "../../ui/suspense";

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
        <React.Fragment key={recipe.uuid}>
          <Suspense
            loader
            loadingProps={{
              loaderType: "cardItemLoader",
              isLoading: isLoading
            }}
          >
            <RecipeListItem recipe={recipe} />
          </Suspense>
        </React.Fragment>
      ))}
    </div>
  );
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool
};

export default RecipeList;

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Paper, Divider } from "@material-ui/core";
import Api from "../../../services/api";
import RecipeDetailHeading from "./recipeDetailHeading";
import RecipeDetailIngredients from "./recipeDetailIngredients";
import RecipeDetailDirections from "./recipeDetailDirections";
import Suspense from "../../ui/suspense";
import Sidebar from "../../ui/layout/sidebar";
import RecipeDetailImages from "./recipeDetailImages";

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
    <div className="sm:flex w-full lg:px-208 my-4">
      <Sidebar colSize="1/3" widgetClasses="justify-center">
        <Suspense
          loader
          loadingProps={{
            isLoading: isLoading,
            loaderType: "placeholder",
            type: "gridFeatured"
          }}
        >
          <RecipeDetailImages images={recipe.images} />
        </Suspense>
      </Sidebar>
      <div
        className={clsx(
          "w-full my-5 p-5 recipe-detail-container",
          isLoading && "flex"
        )}
      >
        <Suspense loader loadingProps={{ isLoading: isLoading }}>
          <Paper className={clsx("flex flex-col items-center my-5 p-5")}>
            <RecipeDetailHeading {...recipe} />
            <Divider variant="middle" className="w-full" />
            <RecipeDetailIngredients
              ingredients={recipe.ingredients}
              specials={specials}
            />
          </Paper>
          <Paper className={clsx("flex flex-col items-center my-5 p-5")}>
            <RecipeDetailDirections directions={recipe.directions} />
          </Paper>
          <Paper>
            <div className="recipe-info-container">Recipe Info</div>
          </Paper>
        </Suspense>
      </div>
    </div>
  );
}

RecipeDetail.propTypes = {
  isLoading: PropTypes.bool,
  recipe: PropTypes.objectOf(PropTypes.shape({ ingredients: PropTypes.array })),
  specials: PropTypes.object
};

export default RecipeDetail;

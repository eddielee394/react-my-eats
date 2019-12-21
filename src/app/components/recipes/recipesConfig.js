import { lazy } from "react";

export const RecipesConfig = {
  routes: [
    {
      path: "/recipes/:id",
      component: lazy(() => import("./recipeDetail/recipeDetail"))
    },
    {
      path: "/recipes",
      component: lazy(() => import("./recipeList/recipeList"))
    }
  ]
};

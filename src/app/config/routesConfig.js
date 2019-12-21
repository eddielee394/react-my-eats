import React from "react";
import { Redirect } from "react-router-dom";
import { generateRoutesFromConfigs } from "../utils/helpers";
import { RecipesConfig } from "../components/recipes/recipesConfig";

const routeConfigs = [RecipesConfig];

const routes = [
  ...generateRoutesFromConfigs(routeConfigs),
  {
    path: "/",
    component: () => <Redirect to="/recipes" />
  }
];

export default routes;

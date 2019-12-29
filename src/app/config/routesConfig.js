import React from "react";
import { Redirect } from "react-router-dom";
import { generateRoutesFromConfigs } from "../utils/helpers";
import { RecipesConfig } from "../components/recipes/recipesConfig";
import { FeedConfig } from "../components/feed/feedConfig";

const routeConfigs = [FeedConfig, RecipesConfig];

const routes = [
  ...generateRoutesFromConfigs(routeConfigs),
  {
    path: "/",
    component: () => <Redirect to="/feed" />
  }
];

export default routes;

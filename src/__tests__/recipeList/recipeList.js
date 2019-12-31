import React from "react";
import { queryByText, render, wait } from "../../setupTests";
import Api from "../../app/services/api";
import RecipeList from "../../app/components/recipes/recipeList/recipeList";
import { demoData } from "../../data/data";

jest.mock("../../app/services/api");

afterEach(() => {
  jest.resetAllMocks();
});

const recipes = {
  message: "ok",
  error: false,
  data: demoData.recipes
};

describe("RecipeList", () => {
  it("renders the RecipeList component and calls getRecipes when mounted", async () => {
    Api.getRecipes.mockResolvedValueOnce(recipes);

    render(<RecipeList />);

    await wait(() => {
      expect(Api.getRecipes).toHaveBeenCalledTimes(1);
    });
  });

  it("displays a loader while waiting for recipes to load", async () => {
    Api.getRecipes.mockResolvedValueOnce(recipes);

    const { getByTitle } = render(<RecipeList />);

    const loader = getByTitle("Loading interface...");
    expect(loader).toBeInTheDocument();
    await wait();
  });

  it("hides the loader and loads the list of recipes", async () => {
    Api.getRecipes.mockResolvedValueOnce(recipes);

    const { queryByTitle, getByTestId } = render(<RecipeList />);

    expect(Api.getRecipes).toHaveBeenCalledTimes(1);
    await wait();

    const loader = queryByTitle("Loading interface...");
    expect(loader).not.toBeInTheDocument();

    const recipeListItem = getByTestId(recipes.data[0].uuid);
    expect(recipeListItem).toBeInTheDocument();

    const recipeTitle = queryByText(recipeListItem, recipes.data[0].title);
    const recipeListItemLink = getByTestId(
      `recipeListItemLink-${recipes.data[0].uuid}`
    );
    expect(recipeTitle).toBeInTheDocument();
    expect(recipeListItemLink).toBeInTheDocument();
  });
});

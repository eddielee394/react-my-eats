import React from "react";
import { render, wait } from "../../setupTests";
import Api from "../../app/services/api";
import Feed from "../../app/components/feed/feed";
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

describe("Feed", () => {
  it("renders the feed component", async () => {
    Api.getRecipes.mockResolvedValueOnce(recipes);

    await wait(() => {
      render(<Feed />);
    });
  });
});

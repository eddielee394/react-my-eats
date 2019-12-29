import React from "react";
import Api from "../../app/services/api";

jest.mock("../../app/services/api");

const loadResponse = () => ({ message: "ok" });

afterEach(() => {
  jest.resetAllMocks();
});

describe("init api tests", () => {
  describe("getRecipes", () => {
    it("should successfully fetch a list of recipes", async () => {
      Api.getRecipes.mockResolvedValueOnce(loadResponse());

      const response = await Api.getRecipes();

      expect(response.message).toEqual("ok");
    });
  });

  describe("getRecipe", () => {
    it("should successfully fetch a single recipe", async () => {
      Api.getRecipe.mockResolvedValueOnce(loadResponse());
      const id = "e80ea521-4d42-48fe-a7a6-ac8952bc0de4";

      const response = await Api.getRecipe(id);

      expect(response.message).toEqual("ok");
    });
  });

  describe("getSpecials", () => {
    it("should successfully fetch an array of specials", async () => {
      Api.getSpecials.mockResolvedValueOnce(loadResponse());

      const response = await Api.getSpecials();

      expect(response.message).toEqual("ok");
    });
  });

  describe("getSpecial", () => {
    it("should successfully fetch a single special", async () => {
      Api.getSpecial.mockResolvedValueOnce(loadResponse());

      const id = "233d8582-141a-460d-b7e1-d623afd69e7d";

      const response = await Api.getSpecial(id);

      expect(response.message).toEqual("ok");
    });
  });
});

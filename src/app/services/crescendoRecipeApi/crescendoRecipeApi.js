import { create } from "apisauce";
import ErrorHandler from "../errorHandler";
import { htmlParser } from "../../utils/helpers";
import { APP_CONFIG } from "../../config/appConfig";

class CrescendoRecipeApi {
  constructor() {
    this.errorHandler = new ErrorHandler();
  }

  api = create({
    baseURL: APP_CONFIG.apiBaseUrl,
    timeout: 10000,
    headers: {
      Accept: "application/json"
    }
  });

  baseUrl = this.api.getBaseURL();

  /**
   * Gets all recipes
   *
   * @return {Promise<{ data: {uuid: string, title: string, description: string, images: {full: string, medium: string, small: string}, servings: number, prepTime: number, cookTime: number, postDate: Date, editDate: Date, ingredients: {uuid: string, amount: string, measurement: string, name: string}[], directions: {instructions: string, "optional": boolean}[]}[], message: string}>}
   */
  getRecipes = async () => {
    const response = await this.api.get("/recipes");

    // the typical ways to die when calling an api
    if (!response.ok) {
      const error = this.errorHandler.getGeneralApiError(response);

      if (error) {
        console.log("Api problem", error);
        return error;
      }
    }

    const convertData = data => {
      return {
        uuid: data.uuid,
        title: data.title,
        description: data.description,
        images: {
          full: `${this.baseUrl}${data.images.full}`,
          medium: `${this.baseUrl}${data.images.medium}`,
          small: `${this.baseUrl}${data.images.small}`
        },
        servings: data.servings,
        prepTime: data.prepTime,
        cookTime: data.cookTime,
        postDate: data.postDate,
        editDate: data.editDate,
        ingredients: data.ingredients.map(d => {
          return {
            uuid: d.uuid,
            amount: d.amount,
            measurement: d.measurement,
            name: d.name
          };
        }),
        directions: data.directions.map(d => {
          return {
            instructions: d.instructions,
            optional: d.optional
          };
        })
      };
    };

    // transform the data into the format we are expecting
    try {
      const rawData = response.data;
      const data = rawData.map(d => convertData(d));

      return { message: "ok", data };
    } catch {
      return { message: "bad-data", data: response.data };
    }
  };

  /**
   * Fetches a single recipe
   * @param id
   * @return {Promise<{ data: {uuid: string, title: string, description: string, images: {full: string, medium: string, small: string}, servings: number, prepTime: number, cookTime: number, postDate: Date, editDate: Date, ingredients: {uuid: string, amount: string, measurement: string, name: string}[], directions: {instructions: string, "optional": boolean}[]}[], message: string}>}
   */
  getRecipe = async id => {
    const response = await this.api.get(`/recipes/${id}`);

    // the typical ways to die when calling an api
    if (!response.ok) {
      const error = this.errorHandler.getGeneralApiError(response);

      if (error) {
        console.log("Api problem", error);
        return error;
      }
    }

    const convertData = data => {
      return {
        uuid: data.uuid,
        title: data.title,
        description: data.description,
        images: {
          full: `${this.baseUrl}${data.images.full}`,
          medium: `${this.baseUrl}${data.images.medium}`,
          small: `${this.baseUrl}${data.images.small}`
        },
        servings: data.servings,
        prepTime: data.prepTime,
        cookTime: data.cookTime,
        postDate: data.postDate,
        editDate: data.editDate,
        ingredients: data.ingredients.map(d => {
          return {
            uuid: d.uuid,
            amount: d.amount,
            measurement: d.measurement,
            name: d.name
          };
        }),
        directions: data.directions.map(d => {
          return {
            instructions: d.instructions,
            optional: d.optional
          };
        })
      };
    };

    // transform the data into the format we are expecting
    try {
      const data = convertData(response.data);

      return { message: "ok", data };
    } catch {
      return { message: "bad-data", data: response.data };
    }
  };

  /**
   * Fetches specials by ingredient
   * @return {Promise<{data: {geo?: string, ingredientId: string, text?: string, type: string, title: string, uuid: string}, message: string}>}
   */
  getIngredientSpecials = async () => {
    const response = await this.api.get("/specials");
    // the typical ways to die when calling an api
    if (!response.ok) {
      const error = this.errorHandler.getGeneralApiError(response);

      if (error) {
        console.log("Api problem", error);
        return error;
      }
    }

    const convertData = data => {
      return {
        uuid: data.uuid,
        ingredientId: data.ingredientId,
        type: data.type,
        title: data.title,
        geo: data.geo,
        text: htmlParser(data.text)
      };
    };

    // transform the data into the format we are expecting
    try {
      const rawData = response.data;
      const data = rawData.map(d => convertData(d));

      return { message: "ok", data };
    } catch {
      return { message: "bad-data", data: response.data };
    }
  };

  /**
   * Fetches a single special
   * @param {string} id
   * @returns {Promise<{data: {geo?: string, ingredientId: string, text: string, type: string, title: string, uuid: string}, message: string}>}
   */
  getIngredientSpecial = async id => {
    const response = await this.api.get(`/specials/${id}`);
    // the typical ways to die when calling an api
    if (!response.ok) {
      const error = this.errorHandler.getGeneralApiError(response);

      if (error) {
        console.log("Api problem", error);
        return error;
      }
    }

    const convertData = data => {
      return {
        uuid: data.uuid,
        ingredientId: data.ingredientId,
        type: data.type,
        title: data.title,
        geo: data.geo,
        text: htmlParser(data.text)
      };
    };

    // transform the data into the format we are expecting
    try {
      const data = convertData(response.data);

      return { message: "ok", data };
    } catch {
      return { message: "bad-data", data: response.data };
    }
  };
}

export default CrescendoRecipeApi;

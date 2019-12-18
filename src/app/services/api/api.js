import CrescendoRecipeApi from "../crescendoRecipeApi";

class Api {
  constructor() {
    this.api = new CrescendoRecipeApi();
  }

  /**
   * Fetches all recipes
   * @returns {Promise<{data: array, message: string}>}
   */
  getRecipes = () => this.api.getRecipes();

  /**
   * Fetches all ingredient specials
   * @returns {Promise<{data: *, message: string}>}
   */
  getIngredientSpecials = () => this.api.getIngredientSpecials();
}

const instance = new Api();

export default instance;

import CrescendoRecipeApi from "../crescendoRecipeApi";

class Api {
  constructor() {
    this.api = new CrescendoRecipeApi();
  }

  /**
   * Fetches all recipes
   * @returns {Promise<{ data: {uuid: string, title: string, description: string, images: {full: string, medium: string, small: string}, servings: number, prepTime: number, cookTime: number, postDate: Date, editDate: Date, ingredients: {uuid: string, amount: string, measurement: string, name: string}[], directions: {instructions: string, "optional": boolean}[]}[], message: string}>}
   */
  getRecipes = () => this.api.getRecipes();

  /**
   * Fetches a single recipe
   * @param {string } id
   * @returns {Promise<{ data: {uuid: string, title: string, description: string, images: {full: string, medium: string, small: string}, servings: number, prepTime: number, cookTime: number, postDate: Date, editDate: Date, ingredients: {uuid: string, amount: string, measurement: string, name: string}[], directions: {instructions: string, "optional": boolean}[]}[], message: string}>}
   */
  getRecipe = id => this.api.getRecipe(id);

  /**
   * Fetches all ingredient specials
   * @returns {Promise<{data: {geo?: string, ingredientId: string, text?: string, type: string, title: string, uuid: string}, message: string}>}
   */
  getIngredientSpecials = () => this.api.getIngredientSpecials();

  /**
   * Fetches a single special
   * @param id
   * @returns {Promise<{data: {geo?: string, ingredientId: string, text: string, type: string, title: string, uuid: string}, message: string}>}
   */
  getIngredientSpecial = id => this.api.getIngredientSpecial(id);
}

const instance = new Api();

export default instance;

import React from "react";

function RecipeDetail(props) {
  return (
    <div className="recipe-detail-container">
      <div className="recipe-heading-container">
        <div className="recipe-title">Recipe title</div>
        <div className="recipe-edit-btn">Edit Recipe btn</div>
        <div className="recipe-edit-btn">Edit Recipe btn</div>
      </div>
      <div>Recipe Ingredients</div>
      <div>Recipe Directions</div>
      <div>Recipe Info</div>
    </div>
  );
}

export default RecipeDetail;

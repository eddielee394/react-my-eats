import React from "react";

function RecipeDetail(props) {
  return (
    <div className="recipe-detail-container">
      <div className="recipe-heading-container">
        <div className="recipe-title">Recipe title</div>
        <div className="recipe-edit-btn">Edit Recipe btn</div>
        <div className="recipe-start-btn">Start Cooking btn</div>
      </div>
      <div className="recipe-ingredients-container">Recipe Ingredients</div>
      <div className="recipe-directions-container">Recipe Directions</div>
      <div className="recipe-info-container">Recipe Info</div>
    </div>
  );
}

export default RecipeDetail;

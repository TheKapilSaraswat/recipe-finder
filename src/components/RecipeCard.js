import React from 'react';

function RecipeCard({ recipe }){
    return (
        <div className="recipe-card">

            <h3>{recipe.title}</h3>
            <p><strong>Servings:</strong> {recipe.servings}</p>
            <p><strong>Ingredients:</strong> {recipe.ingredients.replace(/\|/g, ', ')}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            
        </div>
    );
}

export default RecipeCard;
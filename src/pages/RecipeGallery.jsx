import React from 'react';
import recipe1 from '../assets/recipe1.png';
import recipe2 from '../assets/recipe2.png';
import recipe3 from '../assets/recipe3.png';
import recipe4 from '../assets/recipe4.png';

function RecipeGallery() {
    const recipes = [
        {
            id: 1,
            title: 'Quinoa Salad with Fresh Vegetables',
            description: 'A nutrient-packed salad featuring quinoa, bell peppers, cucumbers, and a light lemon vinaigrette.',
            image: recipe1 // Use the imported image directly
        },
        {
            id: 2,
            title: 'Grilled Salmon with Asparagus',
            description: 'Rich in omega-3 fatty acids, this grilled salmon dish is perfect for a healthy dinner.',
            image: recipe2 // Use the imported image directly
        },
        {
            id: 3,
            title: 'Berry Smoothie Bowl',
            description: 'A delicious blend of mixed berries, Greek yogurt, and chia seeds for a nutritious breakfast.',
            image: recipe3 // Use the imported image directly
        },
        {
            id: 4,
            title: 'Spinach and Chickpea Salad',
            description: 'Rich in fiber and packed with vitamins, this salad is an ideal dinner choice.',
            image: recipe4 // Use the imported image directly
        },
        // Add more recipes as needed
    ];

    return (
        <div className="gallery-container">
            <h1 className="gallery-title">Recipe Gallery</h1>
            <div className="gallery-grid">
                {recipes.map(recipe => (
                    <div key={recipe.id} className="recipe-card">
                        <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                        <h2 className="recipe-title">{recipe.title}</h2>
                        <p className="recipe-description">{recipe.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecipeGallery;

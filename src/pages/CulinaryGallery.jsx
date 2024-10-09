import React from 'react';
import { NavLink } from 'react-router-dom';

import classicPancakes from '../assets/Classic-Pancakes.png';
import avocadoToast from '../assets/Avocado-Toast.png';
import scrambledEggs from '../assets/Scrambled-Eggs.png';
import overnightOats from '../assets/overnight-oats.png';
import smoothieBowl from '../assets/Smoothie-bowl.png';
import breakfastBurrito from '../assets/Breakfast-Burrito.png';
import greekYogurt from '../assets/greek-yogurt.png';
import chiaPudding from '../assets/chia-pudding.png';
import breakfastQuinoaBowl from '../assets/breakfast-quinoa-bowl.png';
import frenchToast from '../assets/French-Toast.png';
import frittata from '../assets/Frittata.png';
import smokedSalmonBagel from '../assets/Smoked-Salmon-Bagel.png';
import recipe1 from '../assets/recipe1.png';
import recipe2 from '../assets/recipe2.png';
import recipe3 from '../assets/recipe3.png';
import recipe4 from '../assets/recipe4.png';

function CulinaryGallery() {
    const images = [
        classicPancakes,
        avocadoToast,
        scrambledEggs,
        overnightOats,
        smoothieBowl,
        breakfastBurrito,
        greekYogurt,
        chiaPudding,
        breakfastQuinoaBowl,
        frenchToast,
        frittata,
        smokedSalmonBagel,
        recipe1,
        recipe2,
        recipe3,
        recipe4,
    ];

    const titles = [
        'Classic Pancakes',
        'Avocado Toast',
        'Scrambled Eggs',
        'Overnight Oats',
        'Smoothie Bowl',
        'Breakfast Burrito',
        'Greek Yogurt',
        'Chia Pudding',
        'Breakfast Quinoa Bowl',
        'French Toast',
        'Frittata',
        'Smoked Salmon Bagel',
        'Quinoa Salad with Fresh Vegetables',
        'Grilled Salmon with Asparagus',
        'Berry Smoothie Bowl',
        'Spinach and Chickpea Salad',
    ];

    return (
        <div className="gallery-container">
            <h1 className="gallery-title">Recipe Gallery</h1>
            <div className="gallery-grid">
                {titles.map((title, index) => (
                    <div key={index} className="recipe-card">
                        <NavLink to='/RecipeProfile' className='categoryRecipesLink'>
                        <img src={images[index]} alt={title} className="recipe-image" />
                        <h5 className="recipe-description">{title}</h5>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CulinaryGallery;

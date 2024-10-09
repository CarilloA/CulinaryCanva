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

function Posts() {
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
  ];
  
  const user = ['Aira', 'Besha', 'Preyl', 'Peter', 'Jake', 'Pye', 'Rhea', 'Shane', 'Denise', 'Warren', 'OJ', 'JR'];
  const date = ['10/03/24', '10/03/24', '10/03/24', '10/03/24', '10/03/24', '10/03/24', '10/03/24', '10/03/24', '10/03/24', '10/03/24', '10/03/24', '10/03/24'];
  const descriptions = [
    'Fluffy pancakes perfect for a hearty breakfast.',
    'A simple, nutritious toast topped with creamy avocado.',
    'Soft, fluffy scrambled eggs ideal for any breakfast plate.',
    'A make-ahead oatmeal that’s ready to eat in the morning.',
    'A refreshing and customizable smoothie served in a bowl.',
    'A satisfying wrap filled with eggs and your favorite toppings.',
    'A layered breakfast that’s both tasty and nutritious.',
    "A creamy and nutritious pudding that's easy to prepare.",
    'A protein-packed bowl that’s warm and satisfying.',
    'Sweet and buttery bread that’s a breakfast favorite.',
    'A versatile egg dish baked with vegetables and cheese.',
    "A classic breakfast combination that's simple yet flavorful.",
  ];
  
  return (
    <div className="container-fluid mt-5">
      <h3 className="main-title text-center">Breakfast Recipes</h3>
      <div className="row mt-4">
        {['Classic Pancakes', 'Avocado Toast', 'Scrambled Eggs', 'Overnight Oats', 'Smoothie Bowl', 'Breakfast Burrito', 'Greek Yogurt', 'Chia Pudding', 'Breakfast Quinoa Bowl', 'French Toast', 'Frittata', 'Smoked Salmon Bagel'].map((title, index) => (
          <div key={index} className="col">
            <NavLink to='/RecipeProfile' className='categoryRecipesLink'>
              <div className="card mb-4" style={{ width: '15rem' }}>
                <img src={images[index]} className="card-img-top" alt={title} style={{ height: '15rem' }} />
                <div className="card-body">
                  <p>{user[index]} | {date[index]}</p>
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{descriptions[index]}</p>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

function CategoryRecipes() {
  return <Posts />;
}

export default CategoryRecipes;

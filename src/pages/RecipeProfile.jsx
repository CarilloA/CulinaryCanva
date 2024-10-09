import React from 'react';
import classicPancakes from '../assets/Classic-Pancakes.png';

function Profile() {
  
  const title = 'Classic Pancakes';
  const user = 'Aira';
  const date = '10/03/24';
  const description = 'Fluffy pancakes perfect for a hearty breakfast.';
  
  const ingredients = [
    '1 cup flour',
    '1 tablespoon sugar',
    '2 teaspoons baking powder',
    '1/2 teaspoon salt',
    '1 cup milk',
    '1 egg',
    '2 tablespoons melted butter',
  ];
  
  const instructions = [
    'In a bowl, mix flour, sugar, baking powder, and salt.',
    'In another bowl, whisk milk, egg, and melted butter.',
    'Combine wet and dry ingredients until just mixed.',
    'Heat a skillet over medium heat, pour batter, and cook until bubbles form. Flip and cook until golden.',
  ];

  return (
    <div className="container-fluid mt-5">
      <h3 className="main-title text-center">Culinary Profile</h3>
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          {/* with card on className="card mb-4 shadow" */}
          <div className="mb-4 shadow">
            <img src={classicPancakes} className="card-img-top" alt={title} style={{ height: '15rem', objectFit: 'cover' }} />
            <div className="card-body"  style={{padding: '1rem', backgroundColor: 'white', borderRadius: '0.5rem' }}>
              <h5 className="card-title">{title}</h5>
              <p className="text-muted">{user} | {date}</p>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row mt-4">
        <div className="col-md-6">
        {/* with card on className="card mb-4 shadow" */}
          <div className="mb-4 shadow" style={{padding: '1rem', backgroundColor: 'white', borderRadius: '0.5rem' }}>
            <div className="card-body">
              <h5 className="card-title">Ingredients</h5>
              <ul className="list-group mt-3">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="list-group-item">{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          {/* with card on className="card mb-4 shadow"*/}
          <div className="mb-4 shadow" style={{padding: '1rem', backgroundColor: 'white', borderRadius: '0.5rem' }}>
            <div className="card-body">
              <h5 className="card-title">Instructions</h5>
              <ol className="list-group list-group-numbered  mt-3">
                {instructions.map((step, index) => (
                  <li key={index} className="list-group-item">{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecipeProfile() {
  return (
    <>
      <Profile />
    </>
  );
}

export default RecipeProfile;

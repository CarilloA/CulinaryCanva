import React from 'react';
import {NavLink} from 'react-router-dom';
import breakfast from './assets/breakfast.png';
import lunch from './assets/lunch.png';
import snack from './assets/snack.png';
import dinner from './assets/dinner.png';
import appetizer from './assets/appetizer.png';
import baked from './assets/baked.png';
import beverage from './assets/beverage.png';
import dessert from './assets/dessert.png';
import mainDish from './assets/mainDish.png';
import noodles from './assets/noodles.png';
import pasta from './assets/pasta.png';
import salad from './assets/salad.png';
import soup from './assets/soup.png';
import vegetable from './assets/vegetable.png';
import recipe1 from './assets/recipe1.png';
import recipe2 from './assets/recipe2.png';
import recipe3 from './assets/recipe3.png';
import recipe4 from './assets/recipe4.png';

function TagLine() {
    return (
        <h5 className="tagline">Paint Your Plate with Fresh Inspiration</h5>
    );
}

function MainCategories() {
    const images = [breakfast, lunch, snack, dinner];
    const descriptions = ['BREAKFAST', 'LUNCH', 'SNACK', 'DINNER'];

    return (
        <div className="container-fluid mt-5">
            <div className="row mt-4 justify-content-center"> {/* Added justify-content-center */}
                {['Quinoa Salad with Fresh Vegetables', 'Grilled Salmon with Asparagus', 'Berry Smoothie Bowl', 'Spinach and Chickpea Salad'].map((title, index) => (
                    <div key={index} className="col d-flex justify-content-center"> {/* Set a fixed width and centered content */}
                        <div className="card mb-4" style={{ width: '18rem' }}>
                            <NavLink to='/Pages/CategoryRecipes' className='categoryRecipesLink'>
                                <h6 className="card-title description">{descriptions[index]}</h6>
                                <img src={images[index]} className="card-img-top img-fluid" alt={title} style={{ height: '18rem' }} />
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


function Categories() {
    const images = [appetizer, baked, beverage, dessert, mainDish, noodles, pasta, salad, soup, vegetable];
    
    return (
        <div className="container-fluid mt-5">
            <div className="row mt-4">
                {['APPETIZERS', 'BAKEDS', 'BEVERAGES', 'DESSERTS', 'MAIN-DISH', 'NOODLES', 'PASTAS', 'SALADS', 'SOUPS', 'VEGETABLES'].map((title, index) => (
                    <div key={index} className="divCircleImg col d-flex flex-column align-items-center mb-4">
                        <NavLink to ='/Pages/CategoryRecipes' className='circleImgLink'>
                            <img 
                                src={images[index]} 
                                alt={title} 
                                className="circleImg" 
                            />
                            <div className='card-body text-center'>
                                <h6 className="card-title">{title}</h6>
                            </div>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Tips() {
    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h3 className="text-center tips-title">Tips for a Balanced Diet</h3>
                    <div id="carouselExample" className="carousel slide mt-4">
                        <div className="carousel-inner">
                            {[
                                { title: "Incorporate a Rainbow of Fruits and Vegetables", text: "Include a variety of colors in your diet to ensure a range of nutrients." },
                                { title: "Choose Whole Grains", text: "Opt for whole grains over refined ones for more fiber and nutrients." },
                                { title: "Stay Hydrated", text: "Drink plenty of water throughout the day for optimal health." },
                                { title: "Limit Processed Foods", text: "Reduce intake of processed and sugary foods to maintain health." },
                                { title: "Practice Portion Control", text: "Be mindful of portion sizes to avoid overeating." }
                            ].map((item, index) => (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                    <h5>{item.title}</h5>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Posts() {
    const images = [recipe1, recipe2, recipe3, recipe4];
    const user = ['Aira', 'Besha', 'Preyl', 'Peter'];
    const date = ['10/03/24', '10/03/24', '10/03/24', '10/03/24'];
    const descriptions = [
        'A nutrient-packed salad featuring quinoa, bell peppers, cucumbers, and a light lemon vinaigrette.',
        'Rich in omega-3 fatty acids, this grilled salmon dish is perfect for a healthy dinner.',
        'A delicious blend of mixed berries, Greek yogurt, and chia seeds for a nutritious breakfast or snack.',
        'Rich in fiber and packed with vitamins, this Spinach and Chickpea Salad is an ideal dinner choice.'
    ];
    
    return (
        <div className="container-fluid mt-5">
            <h3 className="main-title text-center">Fresh Recipes To Taste</h3>
            <div className="row mt-4">
                {['Quinoa Salad with Fresh Vegetables', 'Grilled Salmon with Asparagus', 'Berry Smoothie Bowl', 'Spinach and Chickpea Salad'].map((title, index) => (
                    <div key={index} className="col d-flex justify-content-center">
                            <div className="card mb-4" style={{ width: '15rem' }}>
                            <NavLink to='/RecipeProfile' className='categoryRecipesLink'>
                                <img src={images[index]} className="card-img-top" alt={title} style={{ height: '15rem' }}/>
                                <div className="card-body">
                                    <p>{user[index]} | {date[index]}</p>
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{descriptions[index]}</p>
                                    {/* <a href="#" className="card-link">More Info</a> */}
                                </div>
                                </NavLink>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Home() {
    return (
        <div className="container-fluid">
            <TagLine />
            <div className='divCategories'>
                <MainCategories />
                <Categories />
            </div>
            <Tips />
            <Posts />
        </div>
    );
}

export default Home;

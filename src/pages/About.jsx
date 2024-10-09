import React from 'react';
import avocadoToast from '../assets/Avocado-Toast.png';

function About() {
  return (
    <>
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <div className="welcome-container">
          <h4 className="about-welcome">Welcome to CulinaryCanvas!</h4>
        </div>
        <p className="about-description">
          At CulinaryCanvas, we believe that cooking is not just about sustenance; it's an art form that brings people together. Our platform celebrates the culinary creativity of home cooks and food enthusiasts from around the world. Here, every recipe tells a story, and every dish is a canvas for personal expression.
        </p>

        <div className="about-grid">
          <div className="about-col">
            <div className="about-section">
              <h4 className="about-section-title">Our Mission</h4>
              <p className="about-description">
                Our mission is simple: to create a vibrant community where everyone can share, discover, and savor the diverse flavors of home-cooked meals. We empower users to contribute their favorite recipes, showcasing the unique culinary traditions that make our world deliciously diverse.
              </p>
            </div>

            <div className="about-section">
              <h4 className="about-section-title">A Community of Food Lovers</h4>
              <p className="about-description">
                CulinaryCanvas is more than just a recipe collection; it’s a community. We invite food lovers, from novice cooks to seasoned chefs, to share their culinary creations. Whether it’s a cherished family recipe, a modern twist on a classic dish, or a unique invention born from your kitchen experiments, we want to see it!
              </p>
            </div>
          </div>

          <div className="about-col">
            <div className="about-section">
              <h4 className="about-section-title">Explore and Inspire</h4>
              <p className="about-description">
                Dive into our extensive gallery of user-submitted recipes. With each recipe, you’ll find mouthwatering images, detailed instructions, and personal anecdotes that bring each dish to life. We believe that sharing our cooking experiences inspires others to get creative in their own kitchens.
              </p>
            </div>

            <div className="about-section">
              <h4 className="about-section-title">Join Us!</h4>
              <p className="about-description">
                Join our growing family of culinary artists! Sign up to share your own recipes, connect with fellow food enthusiasts, and discover new flavors from around the globe. Together, let’s celebrate the joy of cooking and the passion for good food.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="about-description" style={{ textAlign: 'center' }}>
        Thank you for being a part of CulinaryCanvas, where every recipe is a work of art!
      </p>
    </>
  );
}

export default About;

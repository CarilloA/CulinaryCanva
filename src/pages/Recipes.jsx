function SpecialImages() {
  const images = [recipe1, recipe2, recipe3, recipe4];
  const descriptions = [
      'Breakfast',
      'Lunch',
      'Snack',
      'Dinner'
  ];
  
  return (
      <div className="container-fluid mt-5">
          <h3 style={{textAlign: 'center'}}>Delicious and Nutritious Recipes</h3>
          <h6>Try these healthy recipes to incorporate more nutrition into your diet</h6>
          <div className="row mt-4">
              {['Quinoa Salad with Fresh Vegetables', 'Grilled Salmon with Asparagus', 'Berry Smoothie Bowl', 'Spinach and Chickpea Salad'].map((title, index) => (
                  <div key={index} className="col">
                      <div className="card mb-4" style={{ width: '18rem' }}>
                          <img src={images[index]} className="card-img-top" alt={title} style={{ height: '18rem' }}/>
                          <div className="card-body">
                              <h5 className="card-title">{title}</h5>
                              <p className="card-text" style={{backgroundColor: 'gray', position: 'absolute', padding: '10px'}}>{descriptions[index]}</p>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
}


function Recipes() {

    return (
      
      <>
          <h1>Recipes</h1>
      </>
    )
  }
  
  export default Recipes
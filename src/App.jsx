import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './common/Navbar.jsx';
import Footer from './common/Footer.jsx';
import Home from './Home';
import Recipes from './pages/Recipes';
import CategoryRecipes from './pages/CategoryRecipes';
import RecipeProfile from './pages/RecipeProfile';
import About from './pages/About';
import PageNotFound from './common/PageNotFound';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    
    <>
      <BrowserRouter>
        <Navbar />
        <body>
          <Routes>
            <Route path='/' element={<Home />} /> {/*for default page*/}
            <Route path='/Home' element={<Home />} />
            <Route path='/pages/Recipes' element={<Recipes />} /> {/*element content is the import file*/}
            <Route path='/Pages/CategoryRecipes' element={<CategoryRecipes />} />
            <Route path='/Pages/RecipeProfile' element={<RecipeProfile />} />
            <Route path='/pages/About' element={<About />} />
            <Route path='/PageNotFound' element={<PageNotFound />} />
          </Routes>
        </body>
      </BrowserRouter>
        {/* <Navbar /> */}
        {/* { <Home /> } */}
        <Footer />
    </>
  )
}

export default App
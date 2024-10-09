import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './common/NavBar.jsx';
import Footer from './common/Footer.jsx';
import Home from './Home';
import CulinaryGallery from './pages/CulinaryGallery.jsx';
import CategoryRecipes from './pages/CategoryRecipes.jsx';
import RecipeProfile from './pages/RecipeProfile.jsx';
import About from './pages/About.jsx';
import ContactUs from './pages/ContactUs.jsx';
import PageNotFound from './common/PageNotFound.jsx';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    
    <>
      <BrowserRouter>
        <Navbar />
        {/* <body> */}
          <Routes>
            <Route path='/' element={<Home />} /> {/*for default page*/}
            <Route path='/Home' element={<Home />} />
            <Route path='/pages/CulinaryGallery' element={<CulinaryGallery />} /> {/*element content is the import file*/}
            <Route path='/Pages/CategoryRecipes' element={<CategoryRecipes />} />
            <Route path='/RecipeProfile' element={<RecipeProfile />} />
            <Route path='/pages/About' element={<About />} />
            <Route path='/pages/ContactUs' element={<ContactUs />} />
            <Route path='/PageNotFound' element={<PageNotFound />} />
          </Routes>
          <Footer />
          
        {/* </body> */}
      </BrowserRouter>
    </>
  )
}

export default App
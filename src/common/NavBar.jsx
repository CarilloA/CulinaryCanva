<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import {NavLink} from 'react-router-dom';

function Navbar() {

    return (
        <>
        
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink to ='Home' className="navbar-brand">CulinaryCanvas</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                            <NavLink to ='Home' className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to ='pages/CulinaryGallery' className="nav-link">Culinary Gallery</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to ='pages/About' className="nav-link">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to ='pages/ContactUs' className="nav-link">Contact Us</NavLink>
                            </li>
                        </ul>
                        {/* Add ms-auto to align these links to the right */}
                        {/* <div className=" ms-auto">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Log In</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sign Up</a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
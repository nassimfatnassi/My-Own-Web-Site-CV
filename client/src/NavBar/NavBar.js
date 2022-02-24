import {Link} from "react-router-dom";
import './Navbar.css';

export default function NavBar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-primary Mynav  ">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand links" >Home</Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
               <Link className="nav-link active links" to="/Project" > Project </Link>
              </li>
             
              <li className="nav-item">
               <Link className="nav-link active links" to="/About" > About </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active links" to="/Certification" > Certification </Link>
             </li>
             <li className="nav-item">
              <Link className="nav-link active links" to="/CantactMe" > Cantact me </Link>
             </li>
            </ul>
          </div>
        </div>
      </nav>
        </>
        
    )
}
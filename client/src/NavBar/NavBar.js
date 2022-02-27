import {Link} from "react-router-dom";
import './Navbar.css';
import { useState } from "react";
export default function NavBar(){
const [active, setActive] = useState("/");

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-primary Mynav  ">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
   {active == "/" ? 
   <Link to="/" className="navbar-brand links home activated" onClick={()=>setActive("/")} >Home</Link> :
   <Link to="/" className="navbar-brand links home" onClick={()=>setActive("/")} >Home</Link>
  }

        
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              {active == "/Project" ? 
              <Link to="/Project" className="nav-link active links activated" onClick={()=>setActive("/Project")} >Project</Link> :
              <Link to="/Project" className="nav-link active links home" onClick={()=>setActive("/Project")} >Project</Link>
             }
                         </li>
             
              <li className="nav-item">
         
              {active == "/About" ? 
              <Link to="/About" className="nav-link active links activated" onClick={()=>setActive("/About")} >About</Link> :
              <Link to="/About" className="nav-link active links " onClick={()=>setActive("/About")} >About</Link>
             }              </li>
              <li className="nav-item">
              {active == "/Certification" ? 
              <Link to="/Certification" className="nav-link active links activated" onClick={()=>setActive("/Certification")} >Certification</Link> :
              <Link to="/Certification" className="nav-link active links " onClick={()=>setActive("/Certification")} >Certification</Link>
             }      
             </li>
             <li className="nav-item">
             {active == "/CantactMe" ? 
             <Link to="/CantactMe" className="nav-link active links activated" onClick={()=>setActive("/CantactMe")} >CantactMe</Link> :
             <Link to="/CantactMe" className="nav-link active links " onClick={()=>setActive("/CantactMe")} >CantactMe</Link>
            }       
             </li>
            </ul>
          </div>
        </div>
      </nav>
      {console.log(active)}
        </>
        
    )
}
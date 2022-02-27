import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About'
import CantactMe from "./Pages/CantactMe";
import Certification from "./Pages/Certification";
import NavBar from './NavBar/NavBar';



function App() {

  return (
  <Router>
    <NavBar />
  <Routes>
    <Route exact path="/" element={<Home  />} />
    <Route exact path="/About" element={<About  />} />
    <Route exact path="/CantactMe" element={<CantactMe  />} />
    <Route exact path="/Certification" element={<Certification  />} />
  </Routes>
  </Router>
  );
}

export default App;


import { Link } from "react-router-dom"

import '../css/navbar.css'
const Navbar = ()=>{
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home" id="navlink">PORTFOLIO</Link>
    <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " ></span>
    </button>
    </div>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav" >
        <li className="nav-item">
          <Link className="nav-link active" id="navlink" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id="navlink" to="/Projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id="navlink" to="/Services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id="navlink" to="/Skills">Skills</Link>
        </li>
        <li className="nav-item">
          <Link style={{marginRight:"10px"}} className="nav-link" id="navlink" to="/about">About</Link>
        </li>
       
      </ul>
    </div>
  
</nav>
    )
    
}

export default Navbar
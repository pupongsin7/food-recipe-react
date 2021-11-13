import "./navbar.css";
import {  Link } from "react-router-dom";
// import {faBars} from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar = () => {
//   function ToggleMenu() {
//     var x = document.getElementById("Navbar");
//     if (x.className === "Navbar") {
//       x.className += " responsive";
//     } else {
//       x.className = "Navbar";
//     }
//   }
  return (
    <div className="Navbar" id="Navbar">
        <h2>Cocktail Recipe</h2>
      {/* <Link to="/"> Home </Link>
      <Link to="/About"> About </Link> */}
      {/* <a href="#" className="icon" onClick={ToggleMenu}>
      <FontAwesomeIcon icon={faBars}/>
      </a> */}
    </div>
  );
};
export default Navbar

import "./navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Navbar" id="Navbar">
      <Link to="/"> Home </Link>
      <Link to="/About"> About </Link>
    </div>
  );
};
export default Navbar;

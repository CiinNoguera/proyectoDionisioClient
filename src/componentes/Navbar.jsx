import React from "react";
import "../css/navbar.css";
import logo from '../img/logoRectangular.png';
import MenuDropDown from "./MenuDropDown";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                   <div className="nabvar__logoContainer">
                      <img src={logo} alt="Logo Dionisio" className="nabvar__logo" />  
                   </div>
                   <MenuDropDown/>
                   
            </nav>
        </>
        
     
    )
    
};

export default Navbar;
import React from "react";
import "../css/navbar.css";
import logo from '../img/logoRectangular.png';
import MenuDropDown from "./MenuDropDown";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                   <MenuDropDown/>
                   <img src={logo} alt="Logo Dionisio" className="nabvar__logo" />  
            </nav>
        </>
        
     
    )
    
};

export default Navbar;
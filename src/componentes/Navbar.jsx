import React from "react";
import "../css/navbar.css";
import MenuDropDown from "./MenuDropDown";

const Navbar = ( {logo} ) => {
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
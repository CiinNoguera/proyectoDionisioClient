import React from "react";
import "../css/navbar.css";

const Navbar = ( {logo} ) => {
    return (
        <>
            <nav className="navbar">
                   <button className="navbar__btn"><i className="bi bi-menu-button-wide nabvar__menu"></i></button>
                   <img src={logo} alt="Logo Dionisio" className="nabvar__logo" />  
            </nav>
        </>
        
     
    )
    
};

export default Navbar;
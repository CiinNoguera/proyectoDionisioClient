import React from "react";
import "../css/navbar.css";

const Navbar = ( {logo} ) => {
    return (
        <>
        <header>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                   <button><i className="bi bi-menu-button-wide"></i></button>
                   <img src={logo} alt="Logo Dionisio" className="logoNavbar" />
                   <button><i className="bi bi-person-bounding-box"></i></button>
                </div>
               
            </nav>
        </header>
        </>
        
     
    )
    
};

export default Navbar;
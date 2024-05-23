import React, { useContext } from "react";
import "../css/navbar.css";
import logo from '../img/logoRectangular.png';
import MenuDropDown from "./MenuDropDown";
import MenuUser from "./MenuUser";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
    const { user } = useContext(UserContext);
    
    return (
        <>
            <nav className="navbar">
                   <div className="nabvar__logoContainer">
                      <img src={logo} alt="Logo Dionisio" className="nabvar__logo" />  
                   </div>
                   {user ? <MenuUser/> : <MenuDropDown/> }
                   
                   
            </nav>
        </>
        
     
    )
    
};

export default Navbar;
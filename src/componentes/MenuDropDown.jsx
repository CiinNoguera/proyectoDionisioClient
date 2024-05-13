import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "../css/menuDropDown.css";

const MenuDropDown = () => {

  const [menu, setMenu] = useState(false);
  
  const menuOpen = () => {
    setMenu(!menu);
  };
  
  return (
    <div>
        <button className="navbar__btn" onClick={menuOpen}>
            <i className="bi bi-menu-button-wide nabvar__menu"></i>
        </button>
       {menu ? (
        <div className='menu__container'>
            <Link to="/Login" className = "menu__item">Iniciar Sesión</Link>
            <Link to="/Register" className = "menu__item">Registro</Link>
            
            <Link to="/Cart" className = "menu__item">Carrito</Link>
        </div>
       ): null };
    </div>
  );
};

export default MenuDropDown;
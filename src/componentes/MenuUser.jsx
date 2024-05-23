import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import "../css/menuUser.css";
import { UserContext } from '../context/UserContext';

const MenuUser = () => {

  const { user, setUser } = useContext(UserContext);

  const [menu, setMenu] = useState(false);
  
  const menuOpen = () => {
    setMenu(!menu);
  };

  const handleLogout = () => {
    setUser(null);
  };
  
  return (
    <div>
        <button className="navbar__btn" onClick={menuOpen}>
            <i className="bi bi-menu-button-wide nabvar__menu"></i>
        </button>
       {user ? (
        <div className='menu__container'>
           <Link to="/Cart" className = "menu__item">Carrito</Link>
           <button className="menu__item" onClick={handleLogout}>Cerrar Sesión</button>
        </div>
       ): null};
    </div>
  );
};

export default MenuUser;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/login.css";
import { loginFetch } from '../api/loginFetch';

const Login = () => {

    const [formData, setformData] = useState({
        email:"",
        password:""
    }
);

const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await loginFetch(formData);
            console.log(res);
            setError('');
        } catch (error) {
            console.log(error);
            setError('Error al iniciar sesión');
        }
}; 
  return (
    <>
       <form onSubmit={(e) => handleSubmit(e)}>
        <div className='form'>
            <h1 className='form__title'>¡Bienvenido de nuevo!</h1>
            <input 
                className='form__item'
                type="email"
                name= "email"
                placeholder= "Ingrese su mail"
                value={formData.email}
                onChange={(e) => setformData({...formData, email: e.target.value})}
                 />
             <input 
                className='form__item'
                type="password"
                name= "password"
                placeholder= "Ingrese su contraseña"
                value={formData.password}
                onChange={(e) => setformData({...formData, password: e.target.value})}
                 />   

            <button 
            className='form__btn'
            type='submit'>Iniciar Sesión
            </button>    

            <h3 className='form__footer'>
            ¿No tenes cuenta?  
            <Link to="/Register" className='form__footerLink'> Registrate</Link>
            </h3> 
        </div>
    </form>
    
    </>
  )
}

export default Login
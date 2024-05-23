import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../css/login.css";
import { loginFetch } from '../api/loginFetch';
import { UserContext } from '../context/UserContext';

const Login = () => {

    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const [formData, setformData] = useState({
        email:"",
        password:""
    }
);

const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const { access } = await loginFetch(formData);
            if (access) {

             const usuario = {
                firstaname: "Cin",
                lastname:"Noguera",
                email: "ciin@test.com",
             }   
                setUser(usuario);
                navigate('/', { replace:true });

            };
            setError('');
        } catch (error) {
            console.log(error);
            setError('Usuario o contraseña incorrectos');
        }
}; 
  return (
    <>
       <form onSubmit={handleSubmit}>
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

            {error && <p className="alert alert-danger">{error}</p>}     

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
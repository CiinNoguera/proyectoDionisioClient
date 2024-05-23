import React, { useState } from 'react';
import "../css/register.css";
import { registerFetch } from '../api/registerFetch';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const [formData, setformData] = useState({
        name:"",
        email:"",
        password:"",
        role:"admin"
    }
);

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await registerFetch(formData)
            console.log(res);
            setError('');
            setSuccess(true);
            navigate('/login', { replace: true });
        }catch (err) {
            console.log(error);
            setError(error.msg);
            setSuccess(false);
        }
}; 
  return (
    <>
       <form onSubmit={handleSubmit}>
       <div className='form__register'>
            <h1 className='form__titleRegister'>Registrate</h1>
            <input 
                className='form__itemRegister'
                type="text"
                placeholder= "Ingrese su nombre"
                value={formData.name}
                onChange={(e) => setformData({...formData, name: e.target.value})}
                 />
            <input 
                className='form__itemRegister'
                type="email"
                placeholder= "Ingrese su mail"
                value={formData.email}
                onChange={(e) => setformData({...formData, email: e.target.value})}
                 /> 
            <input 
                className='form__itemRegister'
                type="password"
                placeholder= "Ingrese su contraseña"
                value={formData.password}
                onChange={(e) => setformData({...formData, password: e.target.value})}
                 /> 
                   
            <button 
            className='form__btnRegister'
            type='submit'>Registrarse
            </button>
            {error && <p className= "alert alert-danger">{error}</p>}  
            {success && <p className= "alert alert-success"> Registro Completado</p>}

            <p>
                ¿Ya tienes una cuenta?
                <Link to="/login">Iniciar Sesión</Link>
            </p>
        </div>
        
       </form>
    </>
  );
}

export default Register
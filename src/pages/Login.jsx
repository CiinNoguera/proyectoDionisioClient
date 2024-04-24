import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/login.css";

const Login = () => {

//     const [form, formData] = useState({
//         email:"",
//         password:""
//     }
// );

    const enviarForm = (e) => {
        e.preventDefault();
}; 
  return (
    <>
       <form onSubmit={(e) => enviarForm(e)}>
        <div className='form'>
            <h1 className='form__title'>Login</h1>
            <input 
                className='form__item'
                type="email"
                name= "email"
                placeholder= "Ingrese su mail"
                // value={form.email}
                // onChange={(e) = formData({...form, email: e.target.value})}
                 />
             <input 
                className='form__item'
                type="password"
                name= "password"
                placeholder= "Ingrese su contraseña"
                // value={form.password}
                // onChange={(e) = formData({...form, password: e.target.value})}
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
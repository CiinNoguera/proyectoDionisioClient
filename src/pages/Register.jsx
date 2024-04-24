import React, { useState } from 'react';
import "../css/register.css";

const Register = () => {
//     const [form, formData] = useState({
//         name:"",
//         email:"",
//         password:"",
//         role:""
//     }
// );

    const enviarForm = (e) => {
        e.preventDefault();
}; 
  return (
    <>
       <form onSubmit={(e) => enviarForm(e)}>
       <div className='form__register'>
            <h1 className='form__titleRegister'>Registrate</h1>
            <input 
                className='form__itemRegister'
                type="text"
                name= "name"
                placeholder= "Ingrese su nombre"
                // value={form.name}
                // onChange={(e) = formData({...form, email: e.target.value})}
                 />
            <input 
                className='form__itemRegister'
                type="email"
                name= "email"
                placeholder= "Ingrese su mail"
                // value={form.email}
                // onChange={(e) = formData({...form, email: e.target.value})}
                 /> 
            <input 
                className='form__itemRegister'
                type="password"
                name= "password"
                placeholder= "Ingrese su contraseña"
                // value={form.password}
                // onChange={(e) = formData({...form, password: e.target.value})}
                 />     
            <button 
            className='form__btnRegister'
            type='submit'>Registrarse</button>
        </div>
       </form>
    </>
  );
}

export default Register
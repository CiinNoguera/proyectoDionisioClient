import React, { useState } from 'react';

const Login = () => {

    const [form, formData] = useState({
        email:"",
        password:""
    }
);

    const enviarForm = (e) => {
        e.preventDefault();
}; 
  return (
    <>
       <form onSubmit={(e) => enviarForm(e)}>
        <div>
            <input 
                type="email"
                name= "email"
                placeholder= "Ingrese su mail"
                value={form.email}
                onChange={(e) = formData({...form, email: e.target.value})}
                 />
        </div>
        <div>
            <input 
                type="password"
                name= "password"
                placeholder= "Ingrese su contraseña"
                value={form.password}
                onChange={(e) = formData({...form, password: e.target.value})}
                 />
        </div>
        <button type='submit'>Iniciar Sesión</button>
    </form>
    <div>
        <h3>
            ¿No tenes cuenta? <Link to="/Register">Registrate</Link>
        </h3>
        
    </div>
    </>
  )
}

export default Login
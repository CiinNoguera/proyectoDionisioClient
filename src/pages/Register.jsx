import React from 'react'

const Register = () => {
    const [form, formData] = useState({
        name:"",
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
                type="text"
                name= "name"
                placeholder= "Ingrese su nombre"
                value={form.name}
                onChange={(e) = formData({...form, email: e.target.value})}
                 />
        </div>
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
        <button type='submit'>Registrarse</button>
       </form>
    </>
  );
}

export default Register
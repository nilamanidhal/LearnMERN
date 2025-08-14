import React, { useState } from 'react'

const Register = () => {

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
    phn: "",
    gen: "",
  });

    function setChange(e){
        setFormData({ ...formData, [e.target.name]: e.target.value }); 
    }

    function submitHandler(){
        e.preventDefault();
    }

  return (
    <div>
      register auth

      <form action="" onSubmit={submitHandler}>
    <input type="text" placeholder='enter your name' name='name' value={formData.name} onChange={setChange} />
        <input type="text" placeholder='email' name='email' value={formData.email} onChange={setChange} />
            <input type="password" placeholder='password' name='pass'  value={formData.pass} onChange={setChange} />
                <input type="text" placeholder='Number' name='phn' value={formData.phn} onChange={setChange} />
                    <input type="text" placeholder='geneder' name='gen' value={formData.gen} onChange={setChange} />
                    <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Register

import React from 'react';
import {useState} from 'react';

const Login = () => {
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };
  return (
    <React.Fragment>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email: </label>
        <input type="email" id='email' onChange={handleChange}/>
        <label htmlFor='pass'>Password: </label>
        <input type="password" id='pass' onChange={handleChange}/>
        <button>OK</button>
    </React.Fragment>
  )
}

export default Login

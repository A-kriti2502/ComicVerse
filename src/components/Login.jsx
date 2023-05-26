import React from 'react';
import Template from './Template';

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title = "Welcome Back"
      desc1 ="Explore the Marvel multiverse and discover infinite possibilities."
      formtype="login"
      setIsLoggedIn = {setIsLoggedIn}
    >
    </Template>
  )
}

export default Login

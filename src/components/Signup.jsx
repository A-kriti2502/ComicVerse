import React from 'react';
import Template from './Template';

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title = "Marvel awaits you"
      desc1 ="Step into a universe where heroes are born."
      formtype="signup"
      setIsLoggedIn = {setIsLoggedIn}
    >
    </Template>
  )
}

export default Signup

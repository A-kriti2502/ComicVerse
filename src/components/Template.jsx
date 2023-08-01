import React from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import {FcGoogle} from "react-icons/fc";

const Template = ({ title, desc1, formtype, setIsLoggedIn }) => {
  return (
    <div className=' flex flex-col flex-wrap items-center justify-betweeen mt-20 h-screen'>
        <div className=' h-4/6  max-w-[500px] flex flex-col gap-3'>
            <h1 className='text-white text-6xl font-extrabold uppercase'>{title}</h1>
            <h3 className='text-blue-300 font-semibold italic'>{desc1}</h3>
            
            {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            {/* <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-white'></div>
                <p className='text-richblack-700 font-medium leading[1.375rem] text-white'>
                    OR
                </p>
                <div className='w-full h-[1px] bg-richblack-700 bg-white'></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 hover:bg-red-800 hover:border-red-800 '>
                <FcGoogle/>
                <p className='text-white'>Sign Up with Google</p>
            </button> */}
        </div>
    </div>
  );
};

export default Template;

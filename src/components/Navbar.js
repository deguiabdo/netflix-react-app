import React from "react";
import {  Link } from "react-router-dom";

export default function Navbar() {
  
  return (
    <div className=' bg-transparent  z-50 flex justify-between items-center p-3'>
      <Link
        to='/'
        className='transition ease-in   hover:scale-110  duration-200    z-50 cursor-pointer   text-red-600 text-4xl font-bold'
      >
        NETFLIX
      </Link>
      <div className=' flex gap-5'>
        <Link
          to='/SingUp'
          className='transition ease-in   hover:scale-110  duration-200   h-10 py-2 z-50 text-white cursor-pointer font-bold text-lg'
        >
          Sing Up
        </Link>
        <Link
          to='/SingIn'
          className='transition ease-in   hover:scale-110  duration-200  z-50 text-white cursor-pointer  font-bold text-lg bg-red-600 h-10 rounded-sm px-5 py-2'
        >
          Sing In
        </Link>
      </div>
    </div>
  );
}



import React from "react";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
     let navigate = useNavigate();
  return (
    <div className=' bg-transparent	 flex justify-between items-center p-3'>
      <h1 className=' text-red-600 text-4xl font-bold'>NETFLIX</h1>
      <div className=' flex gap-5'>
        <button
          onClick={() => {
            navigate("/SingIn");
          }}
          className=' text-white cursor-pointer font-bold text-lg'
        >
          Sing In
        </button>
        <button
          onClick={() => {
            navigate("/SingUp");
          }}
          className=' text-white cursor-pointer  font-bold text-lg bg-red-600 h-10 rounded-sm px-5 py-2'
        >
          Sing Up
        </button>
      </div>
    </div>
  );
}



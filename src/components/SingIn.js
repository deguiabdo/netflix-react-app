import React from 'react'
import {  Link } from "react-router-dom";
import bg_img from "./assets/netflix-bg-img.jpg";
function SingIn() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    isChecked: false,
  });

  function handelForm(event) {
    const { name, type, value, checked } = event.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: type === "checkbox" ? checked : value };
    });
  }
    function handelsubmit(event) {
      event.preventDefault();

    }

  return (
    <div className='  h-auto w-full'>
      <img
        className=' absolute top-0 object-fill w-full h-full'
        src={bg_img}
        alt='netflix-bg-img'
      />
      <div className=' grid place-items-center h-full w-full absolute top-0 bg-transparent'>
        <div className='md:w-[450px] w-full mt-10 h-[500px] grid place-items-center   items-start bg-black bg-opacity-[85%]'>
          <form
            onSubmit={handelsubmit}
            className='px-10 md:px-0 flex flex-col  md:w-[280px] w-full text-white'
          >
            <h1 className=' mt-12  text-3xl font-bold'>Sing Up</h1>
            <input
              className='  mt-8 px-4 focus:outline-none text-base bg-gray-600  h-12 w-full rounded-md'
              placeholder=' Email'
              type='email'
              name='email'
              value={formData?.email}
              onChange={handelForm}
            />
            <input
              className='px-4 focus:outline-none text-base bg-gray-600 mt-4 h-12 w-full rounded-md'
              placeholder=' Password'
              type='password'
              name='password'
              value={formData?.password}
              onChange={handelForm}
            />
            <button className='w-full h-12 mt-8 rounded-md text-lg  font-bold bg-red-600'>
              Sing Up
            </button>
            <div className=' cursor-pointer text-gray-600 font-bold mt-3 text-sm'>
              <input
                className='mr-2 accent-gray-600'
                type='checkbox'
                name='isChecked'
                id='isChecked'
                checked={formData.isChecked}
                onChange={handelForm}
              />
              <label htmlFor='RememberId'>Remember me</label>
              <a className=' float-right' href='http://'>
                Need help ?
              </a>
            </div>
            <div className=' mt-8  '>
              <h1 className='text-gray-600 text-sm inline'>
                Already subscribed to Netflix ?
              </h1>
              <Link to='/SingUp' className='ml-2'>
                Sing Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SingIn
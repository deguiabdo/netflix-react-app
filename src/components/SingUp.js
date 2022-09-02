import React from "react";
import bg_img from "./assets/netflix-bg-img.jpg";

function SingUp() {
  return (
    <div className='  h-screen w-full'>
      <img
        className=' object-fill w-full h-full'
        src={bg_img}
        alt='netflix-bg-img'
      />
      <div className=' text-white text-center grid place-items-center h-full w-full absolute top-0 bg-transparent'>
        <div className='px-2 md:w-[622px] w-[478px] '>
          <h1 className='mb-4 font-bold text-5xl md:text-6xl leading-12'>
            Unlimited movies, TV shows, and more.
          </h1>
          <h1 className='mb-4 md:text-3xl text-2xl'>
            Watch anywhere. Cancel anytime.
          </h1>
          <h1 className='md:text-3xl text-2xl  mb-[10px]'>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h1>
          <form action=''>
            <input
              placeholder='Email address'
              className='mb-4 rounded-sm md:rounded-none px-4 w-full md:w-[60%] h-[60px]  md:h-[70px] focus:outline-none text-gray-600 focus:text-black bg-white placeholder:font-bold'
              type='email'
              name=''
              id=''
            />
            <button className=' rounded-sm md:rounded-none md:text-lg font-bold h-[40px] md:h-[70px] w-[30%] ml-[1px] bg-red-600'>
              Get started {" >"}
            </button>
          </form>
        </div>
        {/* <div className='md:w-[450px] w-full h-[550px] grid place-items-center   items-start bg-black bg-opacity-[85%]'>
          <form
            className='px-10 md:px-0 flex flex-col md:w-[280px] w-full text-white'
            action=''
          >
            <h1 className=' mt-12  text-3xl font-bold'>Sing Up</h1>
            <input
              className='  mt-8 px-4 focus:outline-none text-base bg-gray-600  h-12 w-full rounded-md'
              placeholder=' Email'
              type='email'
              name=''
              id=''
            />
            <input
              className='px-4 focus:outline-none text-base bg-gray-600 mt-4 h-12 w-full rounded-md'
              placeholder=' Password'
              type='password'
              name=''
              id=''
            />
            <button className='w-full h-12 mt-8 rounded-md text-lg  font-bold bg-red-600'>
              Sing Up
            </button>
            <div className=' cursor-pointer text-gray-600 font-bold mt-3 text-sm'>
              <input className='mr-2' type='checkbox' name='' id='Remember' />
              <label htmlFor='Remember'>Remember me</label>
              <a className=' float-right' href='http://'>
                Need help ?
              </a>
            </div>
            <div className=' mt-8  '>
              <h1 className='text-gray-600 text-sm inline'>
                Already subscribed to Netflix ?
              </h1>
              <link></link>
              <a className='ml-2'  href='http://'>
                Sing In
              </a>
            </div>
          </form>
        </div> */}
      </div>
    </div>
  );
}

export default SingUp;

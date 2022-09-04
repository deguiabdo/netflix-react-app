import React from "react";
import bg_img from "./assets/netflix-bg-img.jpg";
import { useNavigate } from "react-router-dom";

function SingUp() {

let navigate = useNavigate()
const [email,setEmail] = React.useState("")

function handelChangr(event){
setEmail(event.target.value)
}
    function handelsubmit(event) {
      event.preventDefault();
    }
  return (
    <div className='  h-auto w-full'>
      <img
        className='object-fill absolute top-0 w-full h-full'
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
          <form onSubmit={handelsubmit}>
            <input
              placeholder='Email address'
              className='mb-4 rounded-sm md:rounded-none px-4 w-full md:w-[60%] h-[60px]  md:h-[70px] focus:outline-none text-gray-600 focus:text-black bg-white placeholder:font-bold'
              type='email'
              value={email}
              onChange={handelChangr}
            />
            <button
              onClick={() => {
                navigate("/");
              }}
              className=' rounded-sm md:rounded-none md:text-lg font-bold h-[40px] md:h-[70px] w-[30%] ml-[1px] bg-red-600'
            >
              Get started {" >"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SingUp;

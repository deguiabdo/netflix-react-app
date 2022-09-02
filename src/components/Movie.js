import React from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Movie(props) {
    const [isLiked, setIsLiked]= React.useState(false)
  return (
    <div className='relative  min-w-[160px] sm:min-w-[200px] md:min-w-[240px] lg:min-w-[280px] '>
      <img
        className=' w-full h-auto object-cover'
        src={props.img}
        alt={props.title}
      />
      <div className=' hover:opacity-80 text-sm bg-black opacity-0 w-full h-full grid place-items-center top-0 text-white font-bold absolute   '>
        <h1>{props.title}</h1>
      </div>
      {isLiked ? (
        <button>
          <FaHeart className='absolute top-2 left-2 ' />
        </button>
      ) : (
        <button>
          <FaRegHeart className='absolute top-2 left-2 ' />{" "}
        </button>
      )}
    </div>
  );
}

export default Movie
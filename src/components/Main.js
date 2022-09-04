import React from "react";
import requests from "../Requests";
import axios from "axios";

export default function Main() {
  const [movies, setMovies] = React.useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  React.useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  function slicing(p, length) {
    return  p?.length > length?p.slice(0, length)+"...":p
  }

  return (
    <div className=' w-full h-[600px] flex flex-col  items-start '>
      <img
        className='w-full h-[660px]  object-fill -z-20	 absolute top-0  '
        src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
        alt={movie?.original_title}
      />
      <div className=' top-0 absolute bg-gradient-to-tr from-black w-full h-[660px]'>
        <div className=' md:ml-8 ml-4 absolute top-[20%]'>
          <h1 className='mb-4 font-bold text-4xl text-white'>
            {movie?.original_title}
          </h1>
          <button className='transition ease-in   hover:scale-110  duration-200   px-4 py-2 mr-2 text-sm border rounded-sm bg-white text-gray-600'>
            Play
          </button>
          <button className='transition ease-in   hover:scale-110  duration-200   px-4 py-2  text-sm border rounded-sm border-white bg-transparent text-white'>
            Watch Later
          </button>
          <h1 className='mt-4 text-gray-500 text-sm'>
            Released {movie?.release_date}
          </h1>
          <p className=' lg:w-[50%] md:w-[70%] w-full  text-white'>
            {slicing(movie?.overview, 140)}
          </p>
        </div>
      </div>
    </div>
  );
}

import React, { useCallback, useMemo, useRef } from "react";
import axios from "axios";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Categories(props) {
  const [movies, setMovies] = React.useState([]);

  const moviesItems = useMemo(
    () =>
      movies.map((movie) => (
        <Movie
          key={movie?.id}
          title={movie?.title}
          img={"https://image.tmdb.org/t/p/original" + movie?.backdrop_path}
        />
      )),
    [movies]
  );
  const leftScrol = useCallback(() => {
    const categ = document.getElementById(props?.cateName);
    categ.scrollLeft = categ.scrollLeft - 500;
  }, []);

  function rightScrol() {
    const categ = document.getElementById(props?.cateName);
    categ.scrollLeft = categ.scrollLeft + 500;
  }

  React.useEffect(() => {
    if (props.apiUrl)
      axios.get(props.apiUrl).then((res) => {
        setMovies(res.data.results);
      });
    console.log(movies);
  }, [props?.apiUrl]);

  return (
    <div className='relative   w-full'>
      <h1 className='w-full md:ml-8 ml-4 pb-3 flex items-center h-8 text-gray-400 font-bold text-base'>
        {props?.cateName}
      </h1>
      <MdChevronLeft
        onClick={leftScrol}
        className='absolute  opacity-60 hover:opacity-100 left-0 z-10 cursor-pointer top-[45%] bg-white rounded-full '
        size={40}
      />
      <div
        id={props?.cateName}
        className='w-full h-auto flex gap-4  scroll-smooth  scrollbar-hide overflow-x-scroll flex-nowrap'
      >
        {moviesItems}
      </div>

      <MdChevronRight
        onClick={rightScrol}
        className='absolute opacity-60 hover:opacity-100 z-10 top-[45%]  cursor-pointer right-0  bg-white rounded-full  '
        size={40}
      />
    </div>
  );
}

export default Categories;

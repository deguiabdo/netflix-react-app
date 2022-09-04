import React from "react";
import axios from "axios";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// {adult: false, backdrop_path: '/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg', genre_ids: Array(3), id: 610150, original_language: 'ja', …}
// adult: false
// backdrop_path: "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg"
// genre_ids: (3) [16, 878, 28]
// id: 610150
// original_language: "ja"
// original_title: "ドラゴンボール超 スーパーヒーロー"
// overview: "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family."
// popularity: 7294.015
// poster_path: "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg"
// release_date: "2022-06-11"
// title: "Dragon Ball Super: Super Hero"
// video: false
// vote_average: 7.1
// vote_count: 230
// [[Prototype]]: Object

function Categories(props) {
  const [movies, setMovies] = React.useState([]);
  const moviesItems = movies.map((movie) => (
    <Movie
      key={movie?.id}
      title={movie?.title}
      img={"https://image.tmdb.org/t/p/original" + movie?.backdrop_path}
    />
  ));
function leftScrol(){
    const categ = document.getElementById(props?.cateName);
    categ.scrollLeft = categ.scrollLeft - 500;
    
}
function rightScrol() {
  const categ = document.getElementById(props?.cateName);
  categ.scrollLeft = categ.scrollLeft + 500;
}

  React.useEffect(() => {
    axios.get(props.apiUrl).then((res) => {
      setMovies(res.data.results);
    });
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

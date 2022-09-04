import React from 'react'
import Main from './Main'
import Categories from './Categories '
import requests from '../Requests'
function Home() {
    
  return (
    <div className=' overflow-x-hidden'>
      <Main />
      <Categories cateName={"Trending"} apiUrl={requests.requestTrending} />
      <Categories cateName={"Upcoming"} apiUrl={requests.requestUpcoming} />
      <Categories cateName={"Top Rated"} apiUrl={requests.requestTopRated} />
      <Categories cateName={"Horror"} apiUrl={requests.requestHorror} />
    </div>
  );
}

export default Home
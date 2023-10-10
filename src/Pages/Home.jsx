import React from 'react'
import {action,trending,comedyMovies,horrorMovies,romanceMovies,documentaries,upcoming} from '../urls'
import NavBar from '../Components/NavBar/NavBar'
import Banner from '../Components/Banner/Banner'
import RowPost from '../Components/RowPost/RowPost'

function Home() {
  return (  
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={trending}title='Trending Now'/>
      {/* <RowPost url={upcoming}title='Upcoming'/> */}
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedyMovies} title='Comedy' isSmall/>
      <RowPost url={horrorMovies} title='Horror' isSmall/>
      <RowPost url={romanceMovies} title='Romance' isSmall/>
      <RowPost url={documentaries} title='Documentaries' isSmall/>
    </div>
  )
}

export default Home
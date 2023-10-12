import React, { useEffect } from 'react'
import {action,trending,comedyMovies,horrorMovies,romanceMovies,documentaries,upcoming} from '../urls'
import NavBar from '../Components/NavBar/NavBar'
import Banner from '../Components/Banner/Banner'
import RowPost from '../Components/RowPost/RowPost'
import IndexAnimation from '../Components/IndexAnimation/IndexAnimation'
import {db} from '../firebase'
import {collection,getDocs} from 'firebase/firestore'

function Home({setIsLoggedIn,showIndexAnimation,setShowIndexAnimation,setUsers,users,email}) {
  const userCollectionRef = collection(db,"user-details")
  
  useEffect(()=>{
    const getUser = async ()=>{
      const data = await getDocs(userCollectionRef)
      setUsers(data.docs.map((doc) => ({...doc.data(),id: doc.id})))
      console.log("is this empty? ",users);
    };
    getUser()
  },[])

  useEffect(() => {
    // Simulate a delay to show the animation for a few seconds
    const animationTimeout = setTimeout(() => {
      setShowIndexAnimation(false); // Hide the animation after the delay
    }, 4000); 

    return () => clearTimeout(animationTimeout);
  }, []);
  

  return (
    showIndexAnimation ? (
      <IndexAnimation/>
    ):(
    <div className="App" id='App'>
      <NavBar setIsLoggedIn={setIsLoggedIn} setUsers={setUsers} email={email}/>
      <Banner/>
      <RowPost url={trending}title='Trending Now'/>
      {/* <RowPost url={upcoming}title='Upcoming'/> */}
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedyMovies} title='Comedy' isSmall/>
      <RowPost url={horrorMovies} title='Horror' isSmall/>
      <RowPost url={romanceMovies} title='Romance' isSmall/>
      <RowPost url={documentaries} title='Documentaries' isSmall/>
    </div>)
  )
}

export default Home
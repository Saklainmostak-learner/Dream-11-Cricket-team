
import { Suspense } from 'react';
import './App.css'
import Banner from './Component/HomePages/Banner/Banner'
import Players from './Component/HomePages/Players/Players';
import NavBar from './Component/NavBar/NavBar'


const fetchPlayer=async()=>{
  const res=await fetch("/data.json");
  return res.json();
}

function App() {
const playersPromise=fetchPlayer();

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <Players playersPromise={playersPromise}></Players>
      </Suspense>
        
    </>
  )
}

export default App

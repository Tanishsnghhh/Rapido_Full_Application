import React,{Suspense} from 'react'
import './App.css';
import { DataProvider } from './Context/Context';
import Navbar from './Components/Navbar/Navbar';
import {Routes,Route} from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";

const Home = React.lazy(()=> import('./Components/Home/Home')) ;
const About = React.lazy(()=> import('./Components/About/About')) ;
const Careers = React.lazy(()=> import('./Components/Carrers/Careers'))
const Safety = React.lazy(()=> import('./Components/Safety/Safety')) ;
const Ride = React.lazy(()=> import('./Pages/Ride/Ride')) ;


function App() {

 return(
  <div>
   <DataProvider>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Suspense fallback={<div className='suspense'> <ClipLoader
        color={"#f9c935"}
    
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>}> <Home /></Suspense>} />
      <Route path="/about" element={<Suspense fallback={<div className='suspense'> <ClipLoader
        color={"#f9c935"}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>}><About /></Suspense>} />
      <Route path="/safety" element={<Suspense fallback={<div className='suspense'> <ClipLoader
        color={"#f9c935"}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>}> <Safety /></Suspense>} />
      <Route path="/careers" element={<Suspense fallback={<div className='suspense'> <ClipLoader
        color={"#f9c935"}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>}> <Careers /></Suspense>} />
      <Route path="/ride" element={<Suspense fallback={<div className='suspense'> <ClipLoader
        color={"#f9c935"}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>}> <Ride /></Suspense>} />
     </Routes>
   </DataProvider>
  </div>
 )
}

export default App;

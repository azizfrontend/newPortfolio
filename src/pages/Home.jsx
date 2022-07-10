import React from 'react'
import Overview from '../components/Overview'
import Tickets from '../components/Tickets'

import NoPages from './NoPages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from '../components/Sidebar';
const Home = () => {
  return (
    <div className='home'>
     <Sidebar/>

    </div>
  )
}

export default Home

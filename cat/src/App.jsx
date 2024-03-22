import React from 'react';
import History from './assets/components/History';
import Mainpage from './assets/components/Mainpage';
import BanList from './assets/components/BanList';


//import { useState } from 'react'
import './App.css'

function App() {
  return (
    
      <div className = "container">
        <History />
        <Mainpage />
        <BanList />
      </div>
    
  )
}
export default App;



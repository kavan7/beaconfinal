import { useState } from 'react'
import {About, Beardle, Contact, Landing, Members, Navbar} from './components'
import './App.css'


function App() {
  

  return (
    <>
    <div>
      <Landing />
      <Navbar />
    <div>
      <About />
      <Beardle />
      <Members />
      <Contact />
    </div>


    </div>
    </>
  )
}

export default App

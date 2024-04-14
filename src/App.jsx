import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <Contact/>
    </div>
  )
}

export default App


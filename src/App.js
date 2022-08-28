import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
function App() {
  console.log('object');
  return (
    <>
      <Navbar/>
      <Sidebar/> 
      <Hero/>
      <Submenu/>
    </>
  )
}

export default App

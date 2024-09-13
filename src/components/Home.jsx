import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Home/Hero/Hero'
import About from './Home/About/About'
import Jack from './Home/Jack/Jack'
import Buy from './Home/Buy/Buy'



function Home() {
  return (
    <div>
  
      <Hero/>
      <About/>
      <Jack/>
      <Buy/>
      

    </div>
  )
}

export default Home
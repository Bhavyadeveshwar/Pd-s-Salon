import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Home/Hero/Hero'
import About from './Home/About/About'
import Jack from './Home/Jack/Jack'
import Buy from './Home/Buy/Buy'
import Footer from './Footer/Footer'


function Home() {
  return (
    <div>
    <Navbar/>
      <Hero/>
      <About/>
      <Jack/>
      <Buy/>
      <Footer/>

    </div>
  )
}

export default Home
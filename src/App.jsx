import React from 'react'
import "./App.css"
import Card from './components/Card/Card'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Wrapper from './components/Wrapper/Wrapper'
import Hero from './components/Hero/Hero'

const App = () => {
  return (
    <>
     <Card />
     <About />
     <Footer />
     <Header />
     <Wrapper />
     <Hero />
     </>
  )
}

export default App
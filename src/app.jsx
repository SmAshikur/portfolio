import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Protfolio from './components/protfolio/protfolio'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
function app() {
  return (
    <div>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Protfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default app
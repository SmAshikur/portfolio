import React from 'react'
import CTA from './CTA'
import ME from '../../assets/ashik.jpg'
import Socail from './socail'
import './header.css'
function header() {
  return (
    <header>
      <section id="home" className='container header_container'>

          <h5>Hello I'm </h5>
          <h1>S. M. Ashikur Rahman</h1>
          <h4 className='text-light'> Full Stack Developer </h4>
          <CTA/>
          <Socail/>
          <div className='me'>
              <img src={ME} alt="me"/>
          </div>
          <a href='#contact' className='scrol'>Scroll Down</a>
      </section>
    </header>
  )
}

export default header
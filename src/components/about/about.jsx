import React from 'react'
import { FaAward, FaUser } from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../../assets/as2.jpg'
import './about.css'

function about() {
  return (
    <section id='about'>
      <h5>Go to Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
          <div className='about_me'>
              <div className='me_about'>
                  <img src={ME} alt="ashik" />
              </div>
          </div>
          <div className='about_content'>
                  <div className='about_cards'>
                        <article className='about_card'>
                          <FaAward className='about_icon'/>
                          <h5>Exprience</h5>
                          <small>1 Year+ Working Exprience</small>
                        </article>
                        <article className='about_card'>
                          <FaUser className='about_icon'/>
                          <h5>Client</h5>
                          <small>10+ Clients</small>
                        </article>
                        <article className='about_card'>
                          <VscFolderLibrary className='about_icon'/>
                          <h5>Work</h5>
                          <small>20+ Projects</small>
                        </article>
                  </div>
                        <p>
                        Motivated to dedicate my computer programming, analysis & design skill in any Computer
based working area. I want to offer my full capabilities & knowledge for the organization where
I will get a chance to work
                        </p>
                        <a href="#contact" className='btn btn-primary'> Lets Talk</a>
              </div>
      </div>
    </section>
  )
}

export default about
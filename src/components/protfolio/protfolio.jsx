import React from 'react'
//import {BiCheck} from 'react-icons/bi'
import './protfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
function protfolio() {
  return (
    <section id='protfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
       <div className='container protfolio_container'>
          <article className='protfolio_item'>
            <div className='protfolio_item-image'>
                <img src={IMG1} alt=""></img>
            </div>
            <h3>This is Protfolio Item TITLE</h3>
            <div className='protfolio_item-cta'>
              <a href='https://github.com' className='btn'>Github link</a>
              <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
            </div> 
          </article>
          <article className='protfolio_item'>
            <div className='protfolio_item-image'>
                <img src={IMG1} alt=""></img>
            </div>
            <h3>This is Protfolio Item TITLE</h3>
            <div className='protfolio_item-cta'>
              <a href='https://github.com' className='btn'>Github link</a>
              <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
            </div> 
          </article>
          <article className='protfolio_item'>
            <div className='protfolio_item-image'>
                <img src={IMG1} alt=""></img>
            </div>
            <h3>This is Protfolio Item TITLE</h3>
            <div className='protfolio_item-cta'>
              <a href='https://github.com' className='btn'>Github link</a>
              <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
            </div> 
          </article>
      

       </div>
    </section>
  )
}

export default protfolio
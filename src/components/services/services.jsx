import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './service.css'
function services() {
  return (
    <section id='service'>
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container service_container" >
          <article className='service'>
            <div className='service_haed'>
                <h3>Web Design</h3>
            </div>
            <ul className='service_list'>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Protfilio Websits</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Company Websits</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Ecommerce Websits</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Socail Websits</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>News Portal</p>
              </li>
            </ul>
          </article>
          <article className='service'>
            <div className='service_haed'>
                <h3>Web Development</h3>
            </div>
            <ul className='service_list'>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Dynamic Protfilio Websits</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Single or multi-vendor Ecommerce CMS</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Pos inventory software</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>School Management System</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Libary Management System</p>
              </li>
            </ul>
          </article>
          <article className='service'>
            <div className='service_haed'>
                <h3>Mobile App Development</h3>
            </div>
            <ul className='service_list'>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Ecommerce App</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Socail App</p>
              </li>
           
           
            </ul>
          </article>
        </div>
    </section>
  )
}

export default services
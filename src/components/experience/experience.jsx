import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'

function experience() {
  return (
    <section id="exprience">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
          <div className='experience_frontend'>
            <h3> Frontend Development</h3>
            <div className='experience_content'>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>Botstrap</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>JS</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>Jequery</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>React JS</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>Vue Js</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article> 
                  
            </div>
          </div>
          <div className='experience_backend'>
            <h3> Backend Development</h3>
            <div className='experience_content'>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>Laravel</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>Node Js</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>Wordpress</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>SQL</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article> 
            </div>
          </div>
          <div className='experience_backend'>
            <h3> Mobile App Development</h3>
            <div className='experience_content'>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>Dart</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>Flutter</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
               
            </div>
          </div>
      </div>
    </section>
  )
}

export default experience
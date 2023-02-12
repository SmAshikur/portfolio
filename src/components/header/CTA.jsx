import React from 'react'
import CV from '../../assets/cv.pdf'

function CTA() {
  return (
    <div className='CTA'>
        <a href={CV} className="btn"> Download CV</a>
        <a href="#contact" className='btn btn-primary'> Lets Talk</a>
    </div>
  )
}

export default CTA
import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'
import { SiGithub } from 'react-icons/si'
import './footer.css'
function footer() {
  return (
    <footer>
      <a href='#home' className='footer_logo'></a>
      <ul className='para_link'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#service'>Services</a></li>
        <li><a href='#protfolio'>Protfolio</a></li>
        <li><a href='#testimonial'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer_socials'>
        <a href='https://web.facebook.com/ashikurashik.a'><BsFacebook/></a>
        <a href='https://www.linkedin.com/in/s-m-ashikur-rahman-683210193'><FaLinkedin/></a>
        <a href='https://github.com/SmAshikur'><SiGithub/></a>
      </div>
      <div className='footer_copyright'>
        <small>&copy; S. M. Ashikur Rahman. All Right</small>
      </div>
    </footer>
  )
}

export default footer
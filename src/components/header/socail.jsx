import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {SiGithub} from 'react-icons/si'
import {AiFillFacebook} from 'react-icons/ai'

function socail() {
  return (
    <div className='header_socials'>
        <a href=' https://www.linkedin.com/in/s-m-ashikur-rahman-683210193' target="_blank"> <FaLinkedin/> </a>
        <a href='https://github.com/SmAshikur' target="_blank"> <SiGithub/></a>
        <a href='https://web.facebook.com/ashikurashik.a' target="_blank"><AiFillFacebook/></a>
    </div>
  )
}

export default socail

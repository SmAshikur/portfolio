import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {SiGithub} from 'react-icons/si'
import {AiFillFacebook} from 'react-icons/ai'

function socail() {
  return (
    <div className='header_socials'>
        <a href='https://linkdin.com' target="_blank"> <FaLinkedin/> </a>
        <a href='https://linkdin.com' target="_blank"> <SiGithub/></a>
        <a href='https://linkdin.com' target="_blank"><AiFillFacebook/></a>
    </div>
  )
}

export default socail
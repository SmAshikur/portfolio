import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BsMessenger } from 'react-icons/bs'
import './nav.css'
import { useState } from 'react'
function Nav() {
  const [activeView,setActiveView] =useState('#home')
  return (
    <nav>
        <a href='#home' className={activeView === '#home'?'active':''} onClick={()=>setActiveView('#home')}> <AiOutlineHome/> </a>
        <a href='#about' className={activeView==='#about'?'active':''} onClick={()=>setActiveView('#about')}> <AiOutlineUser/></a>
        <a href='#exprience' className={activeView==='#exprience'?'active':''} onClick={()=>setActiveView('#exprience')} ><BiBook/></a>
        <a href='#service' className={activeView==='#service'?'active':''} onClick={()=>setActiveView('#service')} ><RiServiceLine/></a>
        <a href='#contact' className={activeView==='#contact'?'active':''} onClick={()=>setActiveView('#contact')}><BsMessenger/></a>
    </nav>
  )
}

export default Nav
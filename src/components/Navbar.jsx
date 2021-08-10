import React from 'react'
import navbar  from './navbar.css'

export default function Navbar({ brand }){
  return(
    <nav className="navbar">
      <div className="container justify-content-center">
        <a href="/">{ brand }</a>
      </div>
    </nav>
  )
}
import React from 'react'
import rick from '../assets/rick.gif'
import principalImage from './principalImage.css'

export default function PrincipalImage() {
  return(
    <div className="img-container">
      <div className="circular-div">
      	<img src={ rick } alt="Rick Eructando" />
      </div>
    </div>
  )
}
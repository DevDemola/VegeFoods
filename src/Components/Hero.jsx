import React from 'react'
import "./Hero.css"
import Button from './Button'
const Hero = () => {
  return (
    <div className='hero'>
      <h1>100% FRESH & ORGANIC FOODS</h1>
      <p>We Deliver Organic Vegetables and Foods</p>
      <Button label={"View Details"}/>
    </div>
  )
}

export default Hero

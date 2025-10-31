import React from 'react'
import './Hero.css'
import SearchChat from './SearchChat'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image-container">
        <img
          src="/images/norwalk-hero.png"
          alt="Downtown Norwalk"
          className="hero-image"
        />
      </div>
      <div className="hero-content">
        <div className="hero-text-container">
          <SearchChat />
        </div>
      </div>
    </section>
  )
}

export default Hero

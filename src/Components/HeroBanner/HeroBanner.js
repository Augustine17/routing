import React from 'react'
import './HeroBanner.css'

export const HeroBanner = () => {
  return (
    <section className="hero_banner">
            <div className="hero_banner-overlay"></div>
            <div className="hero_banner-content">
                <h1>Let us find your <strong>Forever Food.</strong></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                <div className="hero_banner-btn">
                    <a href="/" id = "hero_banner-search-btn">Search now</a>
                    <a href="/">Know more</a>
                </div>
            </div>
        </section>
  )
}
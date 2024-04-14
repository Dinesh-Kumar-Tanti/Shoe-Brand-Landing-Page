import React from 'react'
import "./Hero.css"

const Hero = () => {
    return (
        <main className='hero'>
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p className='description'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="btn-div">
                    <button className='btn red-btn'>Shop Now</button>
                    <button className='btn white-btn'>Category</button>
                </div>
                <div className="ecom-logo">
                    <p className='availability'>Also Available On</p>
                    <img src="images/flipkart.png" alt="flipkart-logo" />
                    <img src="images/amazon.png" alt="amazon-logo" />
                </div>
            </div>
            
            <div className="hero-img">
                <img src="images/shoe_image.png" alt="" />
            </div>
        </main>
    )
}

export default Hero

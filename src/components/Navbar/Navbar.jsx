import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <header>

            <div className="logo">
                <img src="images/brand_logo.png" alt="logo" />
            </div>

            <nav className="nav">
                <li><a href="#">Menu</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </nav>

            {/* <button>Login</button> */}
            <button><a href="#">Login</a></button>

        </header>
    )
}

export default Navbar

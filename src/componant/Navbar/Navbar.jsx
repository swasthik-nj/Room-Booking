import React from 'react'
import "../Navbar/Nav.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <div className="nav-container">
            <div className="nav-sep">
                <div>
                    <h1>
                        Swadhisht
                    </h1>
                </div>
            <div className="nav-bars">
                <Link className='nav-links' to={'/'}>Home</Link>
                <Link className='nav-links' to={'/about'}>About</Link>
                <Link className='nav-links' to={'/book'}>Book Now</Link>
                <Link className='nav-links' to={'/contact'}>Contact Us</Link>
            </div>
            </div>
        </div>
    </div>
  )
}

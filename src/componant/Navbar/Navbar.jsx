import React, { useState } from 'react'
import "../Navbar/Nav.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
        <div className="nav-container">
            <div className="nav-sep">
                <div className="logo">
                    <h1>
                        Swadhisht
                    </h1>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`nav-bars ${menuOpen ? 'active' : ''}`}>
                    <Link className='nav-links' to={'/'} onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link className='nav-links' to={'/about'} onClick={() => setMenuOpen(false)}>About</Link>
                    <Link className='nav-links' to={'/book'} onClick={() => setMenuOpen(false)}>Book Now</Link>
                    <Link className='nav-links' to={'/contact'} onClick={() => setMenuOpen(false)}>Contact Us</Link>
                    <div style={{display:"flex",alignItems:"center",gap:"30px"}}>
                    <img src='./Hotel project/user.svg'alt='user'style={{paddingLeft:"90px"}}className='nav-links-user'></img>
                    <Link className='nav-links' to={'/signin'} onClick={() => setMenuOpen(false)}>Sign In</Link>

                    </div>
                </div>
                {/* <div>
                    <img src='./Hotel project/user.svg'alt='user'></img>
                </div> */}
            </div>
        </div>
    </div>
  )
}
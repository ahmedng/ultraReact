import React from 'react'
import {Link , NavLink} from 'react-router-dom'
import './style.css'



const Navbar = () =>{
    return(
        <div className="navbar">
            
            <div className="container">
                
                <div className="logo">
                    <h2 className="logo-text">Ultra Profile</h2>
                </div>

                <ul className="ul-list">
                    <li className="list-item"><Link to="/">Home</Link></li>
                    <li className="list-item"><a href="#work">Work</a></li>
                    <li className="list-item"><a href="#portfolio">Portfolio</a></li>
                    <li className="list-item"><a href="#profile">Resume</a></li>
                    <li className="list-item"><a href="#about">About</a></li>
                    <li className="list-item"><Link to="/Contact">Contact</Link></li>
                </ul>
                
            </div>
            
        </div>
    )
}


export default Navbar;
import React from 'react'
import { Link } from 'react-router-dom'
import '../css/responsive.css'



const Navigation = () => {
    return (
    <header className="theme row">
        <div className="col-12">
            <div id='header-name'>
                <h1 className="w3-wide">dwyan alford</h1>
            </div>
            <ul>
                <li><button id="active-home"><Link to='/'>Home</Link></button></li>
                <li><button id="active-about"><Link to='/about'>About</Link></button></li>
                <li><button id="active-portfolio"><Link to='/portfolio'>Portfolio</Link></button></li>
                <li><button id="active-contact"><Link to='/contact'>Contact</Link></button></li>
            </ul>
        </div>
    </header>
    )
   }
export default Navigation

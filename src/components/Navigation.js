import React from 'react'
import { Link } from 'react-router-dom'
import '../css/responsive.css'



const Navigation = () => {
    return (
    <header className="theme row">
        <div className="col-12 fixed-top-nav">
            <div id='header-name'>
                <h1 className="w3-wide">dwyan alford</h1>
            </div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    </header>
    )
   }
export default Navigation

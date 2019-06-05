import React from 'react'
import { Link } from 'react-router-dom'



const Navigation = () => {
    return (
    <header className="w3-top theme">
        <div id='header-name'>
            <h1 className="w3-wide">dwyan alford</h1>
        </div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
    </header>
    )
   }
export default Navigation

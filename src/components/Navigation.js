import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../css/responsive.css'

class Navigation extends Component {
    render() {
        return (
            <header className="row theme">
                <div className="col-12 fixed-top-nav">
                    <div id='header-name'>
                        <h1 className="w3-wide">Dwyan Alford</h1>
                    </div>
                    <ul>
                        <li><NavLink to='/' exact activeClassName="active" >Home</NavLink></li>
                        <li><NavLink to='/about' activeClassName="active" >About</NavLink></li>
                        <li><NavLink to='/portfolio' activeClassName="active" >Portfolio</NavLink></li>
                        <li><NavLink to='/contact' activeClassName="active" >Contact</NavLink></li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Navigation

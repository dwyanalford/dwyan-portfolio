import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/responsive.css'



class Navigation extends Component {
    constructor(props){
        super(props);
        
        // this.setHomeActive = this.setHomeActive.bind(this);
        this.setAboutActive = this.setAboutActive.bind(this);
        // this.setPortfolioActive = this.setPortfolioActive.bind(this);
        // this.setContactActive = this.setContactActive.bind(this);

        this.state = {
            homeLinkColor: '#4CAE51',
            aboutLinkColor: '#bfbfbf',
            portfolioLinkColor: '#bfbfbf',
            contactLinkColor: '#bfbfbf'
        }
    }

    setAboutActive(event) {
        this.setState({
            homeLinkColor: '#bfbfbf',
            aboutLinkColor: '#4CAE51'
        })

        document.getElementById('about-li').style.color = '#4CAE51'
    }

    render() {
        return (
            <header className="theme row">
                <div className="col-12 fixed-top-nav">
                    <div id='header-name'>
                        <h1 className="w3-wide">dwyan alford</h1>
                    </div>
                    <ul>
                        <li><Link id="home-li"  style={{color: this.state.homeLinkColor}}  to='/' >Home</Link></li>
                        <li><Link id="about-li" onClick={this.setAboutActive} to='/about'>About</Link></li>
                        <li><Link id="portfolio-li" style={{color: this.state.portfolioLinkColor}} to='/portfolio' >Portfolio</Link></li>
                        <li><Link id="contact-li" style={{color: this.state.contactLinkColor}} to='/contact' >Contact</Link></li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Navigation

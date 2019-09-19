import React from 'react'
import Header from '../Navigation'
import Footer from '../Footer'
import '../../css/portfolio.css'
import Portfolio1 from '../../images/portfolio-dwyanalford.jpg'
import Portfolio2 from '../../images/portfolio-musicpower.jpg'
import Portfolio3 from '../../images/portfolio-careteam.jpg'
import Portfolio4 from '../../images/portfolio-waxoils.jpg'
import Portfolio5 from '../../images/portfolio-boku.jpg'
import Portfolio6 from '../../images/portfolio-ip3.jpg'

const PortfolioFull = () => {
    return (
    <div>
        <Header />
        <section id="portfolio-full">
            <div className="row theme">
                <div id="portfolio-1" className="col">
                    <img src={Portfolio1}
                    alt="dwyan alford online portfolio" />
                    <div className="content">
                        <h2>dwyanalford.com</h2><hr/>
                        <ul>
                            <li>Node.js</li>
                            <li>React.js</li>
                            <li>React Router</li>
                            <li>Express</li>
                            <li>Mongo DB</li>
                        </ul>
                        <p>*<strong> Responsive Design</strong>.</p>
                        <p style={{marginTop: '40px'}}>Code & Files - <a href="https://github.com/dwyanalford/dwyan-portfolio" target="_blank" rel="noopener noreferrer">my github respository</a>.
                        </p>
                    </div>
                </div>
                <div id="portfolio-2" className="col">
                    <img src={Portfolio2}
                        alt="dwyan alford online portfolio" />
                    <div className="content">
                            <h2>Music Power Template Design </h2><hr/><p><a href="https://alford-musicpower-template.herokuapp.com/" 
                            target="_blank" rel="noopener noreferrer">
                                View Website</a> - deployed on Heroku.</p>
                            <ul>
                                <li>Node.js</li>
                                <li>React.js</li>
                                <li>Express.js</li>
                                <li>Handlebars.js</li>
                        </ul>
                        <p>*<strong> Responsive Design</strong>.</p>
                            
                            <p><a href="https://github.com/dwyanalford/band-music-responsive" 
                                target="_blank" rel="noopener noreferrer">
                                    my github respository</a>.
                            </p>
                    </div>
                </div>
                <div id="portfolio-3" className="col">
                <img src={Portfolio3}
                    alt="dwyan alford online portfolio" />
                    <div className="content">
                        <h2>CareTeam Health - (South Carolina)</h2><hr/>
                        <p><a href="http://careteamhealth.com/" 
                            target="_blank" rel="noopener noreferrer">
                                View Website</a></p>
                        <ul>
                            <li>Wordpress CMS</li>
                            <li>Wordpress template but a number of customizations had to be made for client specifications.</li>
                            <li>Managing Web Site - plugin/system updates, backups, client side updates and customizations.</li>
                            <li>Image editing and optimization</li>
                            <li>I am currently the only developer for the company - started Nov. 2017</li>
                        </ul>
                        <p>*<strong> 100% Remote work</strong>.</p>
                    </div>
                </div> 
                <div id="portfolio-4" className="col">
                <img src={Portfolio4}
                    alt="dwyan alford online portfolio" />
                    <div className="content">
                        <h2>Wax & Oils - (Virginia)</h2><hr/>
                        <p><a href="https://waxandoils.com" 
                            target="_blank" rel="noopener noreferrer">
                                View Website</a></p>
                        <ul>
                            <li>Shopify CMS - Liquid</li>
                            <li>Managing Web Site - plugin/system updates, backups, client side updates and customizations.</li>
                            <li>Image editing and optimization</li>
                            <li>Email Marketing design</li>
                            <li>I am currently the only developer for the company - started Jan. 2015</li>
                        </ul>
                        <p>*<strong> 100% Remote work</strong>.</p>
                    </div>                    
                </div> 
                <div id="portfolio-5" className="col">
                <img src={Portfolio5}
                    alt="dwyan alford online portfolio" />
                                        <div className="content">
                        <h2>Boku Revolution X - LA-based Band</h2><hr/>
                        <p><a href="https://waxandoils.com" 
                            target="_blank" rel="noopener noreferrer">
                                View Website</a></p>
                        <ul>
                            <li>CSS</li>
                            <li>Responsive Design</li>
                            <li>Email Marketing design</li>
                            <li>Managing Web Site - plugin/system updates, backups, client side updates and customizations.</li>
                            <li>Image editing and optimization</li>
                            <li>I am currently the only developer for the company - started Dec. 2018</li>
                        </ul>
                        <p>*<strong> 100% Remote work</strong>.</p>
                    </div>            
                </div> 
                <div id="portfolio-6" className="col">
                <img src={Portfolio6}
                    alt="dwyan alford online portfolio" />
                    <div className="content">
                        <h2>Institute for Public Private Partnerships IP3 (Arlington, Virginia)</h2><hr/>
                        <p><a href="http://ip3.org/" 
                            target="_blank" rel="noopener noreferrer">
                                View Website</a></p>
                        <ul>
                            <li>Joomla CMS</li>
                            <li>PHP</li>
                            <li>Designed the Joomla template from scratch and is currently the design at the web address</li>
                            <li>Managing Web Site - plugin/system updates, backups, client side updates and customizations.</li>
                            <li>Image editing and optimization</li>
                            <li>I was the only developer for the company 2015 - 2017</li>
                        </ul>
                        <p>*<strong> 25% Office and 75% Remote</strong>.</p>
                    </div>      
                </div> 
                
            </div>
            
            
        </section>

        <Footer />
        
        
    </div>
    )
   }

export default PortfolioFull
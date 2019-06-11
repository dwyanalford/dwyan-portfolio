import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
 return (
   <section id="portfolio" className="col">
     <div className="content-wrap">
       <h1 className="content-title">My Portfolio</h1>
       <p>...is exactly where you are right now - <code>dwyanalford.com</code>
       <br/>The web app I built using Javascript and the MERN stack. <br />(Mongo, Express, React and Node)
       as well as a number of <br />other dependencies that you can find in the <em>package.json.</em>
       <br />Souce code for the private version of the full app <br />can be viewed in
       <a href="https://github.com/dwyanalford" target="_blank" rel="noopener noreferrer"> my github respository.</a></p>
     </div><br/>
     <button>
     <Link to="/portfolio"
              rel="noopener noreferrer" className="button"></Link>View Portfolio
     </button>
   </section>
 )
}



export default Portfolio;

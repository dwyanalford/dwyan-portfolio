import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
 return (
   <section id="portfolio" className="col">
     <div className="content-wrap">
       <h1 className="content-title">My Portfolio</h1>
       <p>...is exactly where you are right now - <code>dwyanalford.com</code>The web app I built using Javascript, the MERN stack in particular. (Mongo, Express, React and Node)
       as well as a number of other dependencies that you can find in the <em>package.json.</em>
       Source code for this version of the app can be viewed in
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

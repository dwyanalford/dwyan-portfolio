import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
 return (
     <div className="content-wrap">
       <h1 className="content-title">My Portfolio</h1>
       <p>I coded this website,&nbsp;<code>dwyanalford.com</code>&nbsp;with Javascript using:<br/>- The M.E.R.N stack (MongoDB, ExpressJS, ReactJS and NodeJS)
       as well as a number of other dependencies that you can find in the <em>package.json</em> file.
       Source code for a public version of this app can be viewed at&nbsp;
       <a href="https://github.com/dwyanalford" target="_blank" rel="noopener noreferrer">github respository for dwyan alford.</a></p><br/>
       <p><code>dwyanalford.com</code>&nbsp;is a Responsive design. 
        <br/>- There are also two responsive background themes. A "white" theme on smaller devices and a "dark" theme for larger devices. please feel free to test this out on both your mobile and desktop devices. 
       </p>
     <br/>
     <button>
     <Link to="/portfolio"
              rel="noopener noreferrer" className="button"></Link>View My Portfolio
     </button>
    </div>
 )
}



export default Portfolio;

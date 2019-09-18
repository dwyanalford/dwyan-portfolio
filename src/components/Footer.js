import React from 'react'
import WorkIcons from './WorkIcons'
import '../css/responsive.css'

const Footer = () => {
    return(
        <footer className="row theme">
          <div className="col-12">
          <p id="footer-copytext">&copy; { new Date().getFullYear() }
          &nbsp;- Site Design and Development by Dwyan Alford.
          </p>
            <WorkIcons />
          </div>
        </footer>
    )
}

export default Footer
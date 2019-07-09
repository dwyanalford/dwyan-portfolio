import React from 'react'
import '../css/responsive.css'

const Footer = () => {
    return(
        <footer className="row theme">
          <div className="col-12">
          <p id="footer-copytext">&copy; { new Date().getFullYear() }
          &nbsp;- Site Design and Development by Dwyan Alford.
          </p>
          <p id="footer-social-icons">
            <i class="fab fa-linkedin fa-3x colorTheme"></i>
            <i class="fab fa-github-square fa-3x colorTheme"></i></p>
          </div>
        </footer>
    )
}

export default Footer
import React from 'react'
import '../css/responsive.css'

const Footer = () => {
    return(
        <footer className="row theme">
          <div className="col-12">
          <p>&copy; { new Date().getFullYear() }
          &nbsp;- Site Design and Development by Dwyan Alford.
          </p>
          </div>
        </footer>
    )
}

export default Footer
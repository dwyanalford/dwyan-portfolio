import React from 'react'
import Header from '../Navigation'
import Footer from '../Footer'

const Contact = () => {
    return (
    <div>
        <Header />
        <div className="row" style={{ marginTop: '150px'}}>
            <div className="col-12">
                <form method="POST" action="https://formspree.io/dwyan.alford@gmail.com" id="contact-form">
                    <label for="fullname">Name</label>
                    <input type="text" id="fullname" name="firstname" placeholder="Your name.."/>
                    <label for="email">Email * - required</label>
                    <input type="email" name="email" placeholder="Your email" required/>
                    <label for="country">Reason for Contact</label>
                    <select id="reason" name="reason">
                    <option value="general">General</option>
                    <option value="quotation">Request for Quote</option>
                    <option value="lead">Business lead / opportunity</option>
                    </select>
                    <label for="message">Message</label>
                    <textarea name="message" placeholder="Your Message"></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
        <Footer />
    </div>
    )
   }

export default Contact
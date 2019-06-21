import React, { Component } from 'react'
import Header from '../Navigation'
import Footer from '../Footer'
const axios = require('axios');
require('../../css/contact.css')

class ContactForm extends Component {
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeReason = this.onChangeReason.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            reason: '',
            message: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangeReason(e) {
        this.setState({
            reason: e.target.value
        })
    }

    onChangeMessage(e) {
        this.setState({
            message: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        
        axios.post('http://localhost:3001/contacts', {
            name: this.state.name,
            email: this.state.email,
            reason: this.state.reason,
            message: this.state.message
          })
          .then(function (response) {
            const name = response.data.name;
            
            document.getElementById("contact-alert-message").innerHTML = name + ", thank you for your message! I will get back to you shortly.";

            const element = document.getElementById("contact-alert-message");
            const cName = "contact-animation";
            const arr = element.className.split(" ");
            if (arr.indexOf(cName) == -1) {
                element.className += " " + cName;
            }

            setTimeout( () => {
                window.location.href = "http://localhost:3000/"
            }, 6000)
    
          })
          .catch(function (error) {
            console.log(error);
          });

          this.setState({
            name: '',
            email: '',
            reason: '',
            message: ''
        });
    }

    render() {
    return (
    <div>
        <Header />
        <div className="row" style={{ marginTop: '150px'}}>
            <div id="contact-container" className="col-12">
                <form id="contact-form" onSubmit={this.onSubmit}>

                    <label>Name</label>
                    <input type="text" id="name" name="name" value={this.state.name} onChange={this.onChangeName}/>

                    <label>Email * - required</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.onChangeEmail} required/>

                    <label>Reason for Contact</label>
                    <select id="reason" name="reason" onChange={this.onChangeReason}>
                    <option>Choose from these options</option>
                    <option value="general">General</option>
                    <option value="quotation">Request for Quote</option>
                    <option value="opportunity">Business lead / opportunity</option>
                    </select>

                    <label>Message</label>
                    <textarea name="message" value={this.state.message} onChange={this.onChangeMessage}></textarea>

                    <button>Send Message</button>
                </form>
                <div id="contact-alert">
                    <div className="contact-alert-style">
                        <p id="contact-alert-message"></p>
                </div>
        </div>
            </div>
        </div>
        <Footer />
    </div>
    )
    }
}

export default ContactForm
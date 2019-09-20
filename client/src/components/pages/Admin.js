import React, { Component } from 'react'
import axios from 'axios'

const ContactList = function ActionLink(props) {
    function handleClick(e) {
      e.preventDefault();
      
      axios.delete('https://dwyan-alford-portfolio.herokuapp.com/contacts/' + props.contacts._id)
    //   alert(props.contacts.name + '\'s message was deleted')
    }
  
    return (
    <tr>
        <td>{props.contacts.messageDate}</td>
        <td>{props.contacts.reason}</td>
        <td>{props.contacts.name}</td>
        <td>{props.contacts.email}</td>
        <td>{props.contacts.message}</td>
        <td><button className="w3-light-green w3-tiny">
                EMAIL
            </button>
        </td>
        <td>
            <button onClick={handleClick} className="w3-red w3-tiny w3-text-light-gray">
                DELETE
            </button>
        </td>
    </tr>
    );
}

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {contacts: []}
    }


componentDidMount() {
    axios.get('https://dwyan-alford-portfolio.herokuapp.com/contacts')
        .then( (results) => {
            this.setState( {contacts: results.data})
        }).catch( (error) => {
            console.log(error)
        })
}

// This lifecycle method updates the client without refreshing
componentDidUpdate() {
    axios.get('https://dwyan-alford-portfolio.herokuapp.com/contacts')
        .then( (results) => {
            this.setState( {contacts: results.data})
        }).catch( (error) => {
            console.log(error)
        })
}

contactList() {
    return this.state.contacts.map(function(allContacts, i) {
        return <ContactList contacts={allContacts} key={i} />
    })
}

render() {
    return(
        <div>
            <h3>Admin - dwyanalford.com</h3>
            <table className="w3-table-all w3-hoverable">
                <thead>
                    <tr>
                    <th>Received</th>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Actions</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    { this.contactList() }
                </tbody>
            </table>
        </div>
    )
}
}

export default Admin
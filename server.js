const express = require('express')
require('./database')
const Contact = require('./models/user')
const cors = require('cors')
const path = require('path')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

// send static file requests to the location you choose on the client
// this directs to build folder than create-eact-app generates 
// on production build
app.use(express.static(path.join(__dirname, "client", "build")))

// to retrieve all my contacts in the mongoDB database
app.get('/contacts', async (req, res) => {
    try {
        const contact = await Contact.find({})
        res.send(contact)
    } catch (error) {
        res.status(500).send(error)
    }
})

// add a new contact and save to database
app.post('/contacts', async (req, res) => {
    const contact = new Contact(req.body)
    try {
        await contact.save()
        res.status(201).send(contact)
    } catch (error) {
        res.status(500).send()
    }
})

// delete a contact from the database
app.delete('/contacts/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id)
        if (!contact) {
            res.status(404).send()
        }
        res.send(contact)

    } catch (error) {
        res.status(500).send(error)
    }
})

// A 'catch-all' to send the main index.html file back to the client if it didn't 
// receive a request it recognized otherwise - this will break App on two servers
// so fix this by adding a proxy in the package json.
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => console.log(`App listening on port ${port}!`))
const express = require('express')
require('./src/database')
const Contact = require('./src/models/user')
const cors = require('cors')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

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

app.listen(port, () => console.log(`App listening on port ${port}!`))
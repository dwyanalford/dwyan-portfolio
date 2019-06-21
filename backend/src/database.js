// Mongoose Connection to MongoDB
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/portfolio', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Successfully connected to MongoDB')
})
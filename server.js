const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/maker?authSource=admin"', (err, database) => {
    // ... start the server
})
var db

MongoClient.connect('your-mongodb-url', (err, database) => {
    if (err) return console.log(err)
    db = database
    app.listen(3000, () => {
        console.log('listening on 3000')
    })
})



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
        // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
        // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})




app.post('/quotes', (req, res) => {
    console.log('Hellooooooooooooooooo!')
    console.log(req.body)
})
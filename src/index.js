const express = require('express')
const bodyParser = require('body-parser')
const env = require('dotenv').config()
const route = require('./routes/routes')

// creating express app
const app = express()

// using body-parser for parsing requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/', route)

app.listen(process.env.PORT, function() {
    console.log(`Express app is running on ${process.env.PORT} `)
})
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

mongoose.connect(process.env.MONGO_URL)

app.get('/test', (req, res) => {
    res.json('test ok')
})

app.get('/register', (req, res) => {

})

app.listen(4000);
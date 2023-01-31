const express = require('express');

const app = express();
const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server don start for port: " + PORT))
const path=require ('path')
// var bodyParser = require('body-parser')



const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/test100')
console.log('connected');




app.set('view engine', 'hbs');
// app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded());
app.use('/', require('./routes/login'));



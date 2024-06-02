const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const upload = multer();

const productRoute = require('./routes/api/productRoute');


const DB_USER = process.env.MONGO_DB_USERNAME || 'samato';
const DB_PASS = process.env.MONGO_DB_PWD || 'n70Lo8MZgJbCmnTu';

// Connecting to the Database
let mongodb_url = `mongodb://${DB_USER}:${DB_PASS}@mongo:27017/yolo`;

//let mongodb_url = 'mongodb://localhost:27017/yolomy';
// when starting app locally, use "mongodb://admin:password@localhost:27017" URL instead
// mongodb://${DB_USER}:${DB_PASS}@mongodb
// let mongodb_url = `mongodb+srv://samato:n70Lo8MZgJbCmnTu@cluster1.qjvlrbu.mongodb.net/yolo`;

// the following db will be created on first connect
let dbName = "yolomy";


// define a url to connect to the database
const MONGODB_URI = process.env.MONGODB_URI || mongodb_url+dbName
mongoose.connect(MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true  } )
let db = mongoose.connection;

// Check Connection
db.once('open', ()=>{
    console.log('Database connected successfully')
})

// Check for DB Errors
db.on('error', (error)=>{
    console.log(error);
})

// Initializing express
const app = express()

// Body parser middleware
app.use(express.json())
  
// 
app.use(upload.array()); 

// Cors 
app.use(cors());

// Use Route
app.use('/api/products', productRoute)

// Define the PORT
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})

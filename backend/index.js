const express = require('express')
const bodyParse = require('body-parser');
const {connection }= require('./connection');
const routerAPI = require('./Router/api')
const app = express()
const port = 5001;

// Database Conection 
connection('mongodb://localhost:27017/Chatapp').then(()=>{
    console.log('Data base Connection successfully');
}).catch((error)=>{
    console.error("Database Connection failed");
})

// Middleware express pakage
app.use(express.json());
app.use(bodyParse.json());
app.use(express.urlencoded({extended:false}));
app.use('/api' , routerAPI)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
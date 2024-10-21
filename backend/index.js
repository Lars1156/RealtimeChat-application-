const express = require('express')
const {connection }= require('./connection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express()
const port = 5001;

// Database Conection 
connection('mongodb://localhost:27017/Chatapp').then(()=>{
    console.log('Data base Connection successfully');
}).catch((error)=>{
    console.error("Database Connection failed");
})

// Import file
const User = require('./model/user');

// Routes

app.get('/' ,(res,req)=>{
    res.send('welcome to serverside ');
});

app.post('/api/register', async (req, res, next)=>{
    try {
         const { userName ,email, password }= req.body;
         if(!userName || !email || !password){
            return  res.status(400).send('Please Enter the full fillment From');
         }else{
            const isAllreadyExist = await User.findOne({email});
            if(isAllreadyExist){
                return res.status(400) .send("User Is Allready Existes");
         }else{
            const newUser = new User({userName , email});
            bcrypt.hash(password, 10 ,(err, hashedPassword)=>{
                 newUser.set('password', hashedPassword);
                 newUser.save();
                 next(); 
            })
         }
           return res.status(200). send("User is Registerd Successfully ");
        }

    } catch (error) {
        return res.status(500).send("Internal Sever Error");
    }
})

// Login Routes
app.post('/api/loginuser', async (req,res)=>{
    try {
        const{email , password} = req.body;
        if (!email || !password) {
            return res.status(401).send('please Entered the full fill User detils');
        }else{
            const validateUser = await User.findOne({email});
            if(!validateUser){
                res.status(400).send('Enter the Email and Password ');
            }else{
                
            }
        }

    } catch (error) {
        return res.status(500).send("Internal Sever Error");
    }
})

// Middleware express pakage
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
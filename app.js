require('dotenv').config()
require('./config/database').connect()

const express = require('express')
const User = require('./models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('./middleware/auth') 

const app = express()
app.use(express.json())

app.post("/register",async (req,res)=>{
    //register
    try{
        
        const { frist_name, last_name, email, password,} = req.body
        console.log(User);

        //validate
        if(!(email && password && frist_name && last_name)){
            res.status(400).send("All input is required")
        }
        //check already exist
        //validate user in database
        const oldUser = await User.findOne({ email });
        console.log("oldUser",oldUser)
        if (oldUser){
            return res.status(409).send("User aready exist. Please login")
        }
        //Enccrypt user password
        encryptedPassword = await bcrypt.hash(password, 10)
        console.log(encryptedPassword);
        //Create user
        const user = await User.create({
            frist_name,
            last_name,
            email: email,
            password: encryptedPassword
        })
        //create token
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,{
                expiresIn: "2h"
            }
        )

        //save user token
        user.token = token
        res.status(201).json(user);
    }catch(err){
        console.log(err);
    }

})
app.post("/login", async(req,res)=>{
    //login
    try{
        //get user
        const { email, password } = req.body
        if (!(email && password )){
            res.status(400).send("All input is required")
        }
        const user = await User.findOne({ email })
        if (user && (await bcrypt.compare(password,user.password))){

            const token = jwt.sign(
                { user_id: user._id },
                process.env.TOKEN_KEY,{
                    expiresIn: "2h"
                } 
            )
            user.token = token
            res.status(200).json(user)
        } else {
            res.status(400).send("Invalid Credentials")
        }
    }catch(err){
        console.log(err);
    }
})

app.post('/welcome', auth, (req, res)=>{
    res.status(200).send('Welcome -*-')
})


module.exports = app;
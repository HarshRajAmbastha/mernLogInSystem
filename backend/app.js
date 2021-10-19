const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')
const app = express()
const router = express.Router();
const port = 5000
const verify=require("./middleware/authenticate")

dotenv.config({ path: './config.env' })
const DB = process.env.DATABASE;
app.use(express.json());
const User = require('./model/userSchema')



mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,

  })
  .then(() => console.log('Database connected.'))
  .catch(err => console.log(err));





app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log("hey")
})
app.post('/register', async (req, res) => {
  const { name, email, work, phone, password, cpassword } = req.body;
  if (!name || !email || !work || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "Form Not Properly Filled" });
  }
  try {
    const userExist = await User.findOne({ email: email })
    if (userExist) {
      return res.status(422).json({ error: "Email ALready Exists" })
    }
    else if (password != cpassword) {
      return res.status(422).json({ error: "Password does not match" })
    }
    else {
      const user = new User({ name, email, work, phone, password, cpassword })
      await user.save()
      res.status(201).json({ message: "user registered successfully" })
    }
   


  } catch (error) {
    console.log(error);
  }




})

//login route
app.post('/signin', async (req, res) => {
  try {

    let token;

    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill the data correctly" })
    }
    const userLogin = await User.findOne({ email: email })
    console.log(userLogin);
  
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password)
      // token = await userLogin.generateAuthToken();
      // console.log(token)

      // res.cookie("jwtoken",token,{
      //   expires:new Date(Date.now()+25892000000),
      //   httpOnly:true

      // })
      
      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials" })
      }
      else {
        // res.status(200).json({ message: "Login Success" })
        const accessToken = jwt.sign(
          { id: userLogin._id },
          process.env.SECRET_KEY,
          { expiresIn: "5d" }
        );
        console.log(accessToken);
        console.log("I am here")
        const { password, ...info } = userLogin._doc;
        res.status(200).json({ ...info, accessToken });
      }
    }
    else {
      res.status(400).json({ error: "Invalid Credentials" })
    }

  } catch (error) {
    console.log(error)
  }
})

//about page request

app.get('/about',verify,  (req, res) => {
  console.log("About")
  res.send(req.user)
})
app.get('/forget', (req, res) => {
  res.cookie("harsh","test")
  res.send('Forget World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
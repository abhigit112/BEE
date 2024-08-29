const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors());
const bodyParser = require('body-parser');


require('dotenv').config()
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(bodyParser.json());


//calling Database function
require('./config/database').connect()

//route importing and mounting
const user = require('./routes/user')

app.use('/api/v1', user)


app.listen(PORT, ()=>{
    console.log("Server Started")
   
})
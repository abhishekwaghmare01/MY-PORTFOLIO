const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

//dotenv configuration
dotenv.config();

//to create a rest obj.
const app = express()

//middleware
app.use(cors());
app.use(express.json())

//routes
app.use('/api/v1/portfolio', require('./routes/routesPortfolio') );

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT,()=>{
    console.log(`Server Running on  PORT  ${PORT}`);
})
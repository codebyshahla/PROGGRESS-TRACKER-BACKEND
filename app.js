// index.js
const express = require("express");
const cors = require("cors");
const commonRouter = require ('./router/CommonRouter')
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 5000;
require("dotenv").config();
require('./Config/Config')()
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
// Define routes here..
app.use('/',commonRouter)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

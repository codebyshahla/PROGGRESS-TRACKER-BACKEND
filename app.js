// index.js
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
require('dotenv').config();
require('./Config/Config')();
const commonRouter = require('./router/CommonRouter');
app.use(cors());

app.use(express.urlencoded({extended: false}));
app.use(express.json());
// Define routes here..
app.use('/', commonRouter);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

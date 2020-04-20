//Dependecy requirements
const http = require('http');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
require('dotenv').config();

//App settings
const app = express();
const port = process.env.PORT || 6000;

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Helmet middleware
app.use(helmet.hidePoweredBy());

//start server
const server = http.createServer(app);
server.listen(port);

//Log output of server running
console.log(`Server running at port ${port}`);
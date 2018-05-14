'use strict';

const express = require('express');
const app = express();

const path = require('path'); 


require('dotenv').config();
const port = process.env.PORT || 8080;


app.set('view engine', 'pug');

let routes = require('./routes/');

// Begin middleware stack


app.use(express.static(__dirname + "/public"));

app.use(
  "/bootstrap",
  express.static(__dirname + "/node_modules/bootstrap/dist/")
);

app.use(routes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

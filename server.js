import dotenv from "dotenv"
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Include data routes here
const users = require('./controllers/users');
const accounts = require('./controllers/accounts');
const transactions = require('./controllers/transcations');

app.use('./users', users);
app.use('./accounts', accounts);
app.use('/transactions', transactions);

//

app.get("/", (req, res) => {
    res.send("Welcome to the API.");
  });

//Error handling
app.use((err, _req, res, next) => {
    res.status(500).send("Seems like we messed up somewhere...");
  });

//Start Express server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
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
//
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
// setup the package variables
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

// initialize the app
const app = express();

// set the app's functions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// call the API this is your api
app.get("/qotd", (req, res) => {
  axios
    .get(
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"
    )
    .then((data) => {
      quoteInfo = data.data.quoteText;
      res.send(quoteInfo);
    })

    // catching errors
    .catch((error) => console.log(error));
});

//start server
app.listen(3001, () => console.log("server started"));

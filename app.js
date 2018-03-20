const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const queries = require("./queries");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (request, response) => {
  queries
    .list()
    .then(userdata => {
      response.json({ userdata });
    })
    .catch(console.error);
});

app.post("/", (request, response) => {
  queries
    .create(request.body)
    .then(userdata => {
      response.json({ userdata });
    })
    .catch(console.error);
});

app.post("/", (req, res) => {
  res.json("POST worked!");
});

app.listen(process.env.PORT || 3000);

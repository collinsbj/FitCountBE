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
      response.json(userdata);
    })
    .catch(console.error);
});

app.post("/", (request, response) => {
  queries
    .create(request.body)
    .then(userdata => {
      response.json(userdata);
    })
    .catch(console.error);
});

app.get("/:username", (request, response) => {
  queries
    .read(request.params.username)
    .then(data => {
      data ? response.json(data) : response.send("Data not found");
    })
    .catch(console.error);
});

app.put("/:username", (request, response) => {
  queries
    .update(request.params.username, request.body)
    .then(data => {
      response.json(data[0]);
    })
    .catch(console.error);
});

app.delete("/:username", (request, response) => {
  queries
    .delete(request.params.username)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.listen(process.env.PORT || 3000);

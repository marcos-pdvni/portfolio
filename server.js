const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
const main = require("./routes/main");
const resume = require("./routes/resume");

app.use(resume);
app.use(main);

app.use((req, res) => {
  res.status(404).send("Page not found");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.info("Running on port", port);
});

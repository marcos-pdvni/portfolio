const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/resume", (req, res) => {
  const file = path.join(
    __dirname,
    "../file",
    "Currículo MVPT português.docx (2).pdf"
  );

  fs.readFile(file, (err, data) => {
    if (err) return;

    res.contentType("application/pdf");
    res.send(data);
  });
});

module.exports = router;

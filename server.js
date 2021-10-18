const express = require('express');
const { port } = require('./config.json');
const data = require("./DummyData");

const app = express();

app.get('/data', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ data: data })
});

app.listen(port, () => console.log(`server is listening on: ${port}`));

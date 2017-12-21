const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
  res.send('It Works!');
});

const port = process.env.POST || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

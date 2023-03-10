require('dotenv').config();

const express = require('express');
const app = express();

// Constants
const PORT = process.env.DOCKER_PORT || 3000;
const HOST = '0.0.0.0';

// App
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

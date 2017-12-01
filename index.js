const express = require('express');
const path = require('path');
const IS_PRODUCTION = require('./webpack/config').IS_PRODUCTION;
const BUILD_DIR = path.join(__dirname, '/build');
const HTML_FILE = path.join(__dirname, '/build/index.html');

const app = express();

if (IS_PRODUCTION) {
  app.use(express.static(BUILD_DIR));
  app.get('*', (req, res) => res.sendFile(HTML_FILE));
  app.listen(process.env.PORT, () => {
    console.log('Server started');
  });
}

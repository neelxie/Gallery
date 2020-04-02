const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, 'build');
const othaPath = path.join(publicPath, 'index.html');

const PORT = process.env.PORT || 5000;

app.use(express.static(publicPath));

app.get('*', function(req, res) {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT);
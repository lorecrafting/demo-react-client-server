const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(express.static(path.join(__dirname, '../build')))

app.use(cors());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/api/hello', (req, res) => res.send('ELLLLO'))
app.listen(8080, () => console.log('App listening on port 8080'))

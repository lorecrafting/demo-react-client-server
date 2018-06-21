const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.static(__dirname + '../build'))

app.get('/api/hello', (req, res) => res.send('ELLLLO'))
app.listen(8080, () => console.log('App listening on port 8080'))

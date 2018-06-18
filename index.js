const express = require('express');
const app = express();

const Data = require('./data.js');
const data = new Data();

//const config = require('./config/config.js');

const port = 3010;

app.get('/', async function (req, res) {
	res.set('Content-Type', 'text/html');
	res.sendFile(__dirname + '/views/main.html');
});

app.get('/api/sendcode/:code', async function (req, res) {
	res.json(await data.sendCode(req.params.code));
});

app.use(express.static('public'))

app.listen(port, function () {
  console.log(`PiSwitch listening on port ${port}!`);
});

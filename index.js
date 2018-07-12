const express = require('express');
const app = express();

const config = require('./config/config.js');

app.use(express.static('public'))
app.use(express.json());  

app.get('/', async function (req, res) {
	res.set('Content-Type', 'text/html');
	res.sendFile(__dirname + '/views/main.html');
});

if(config.get)
app.get('/api/action/:action/:data', async function (req, res) {
	const action = require(`./actions/${req.params.action}.js`);
	res.json(await action.run(req.params.data));
});

app.post('/api/action', async function (req, res) {
	const action = require(`./actions/${req.body.action}.js`);
	res.json(await action.run(req.body.data));
});

app.listen(config.port, function () {
	console.log(`PiSwitch listening on port ${config.port}!`);
});

const express = require('express');
const app = express();

const config = require('./config/config.js');

app.get('/', async function (req, res) {
	res.set('Content-Type', 'text/html');
	res.sendFile(__dirname + '/views/main.html');
});

app.get('/api/:action/:data', async function (req, res) {
	const action = require(`./actions/${req.params.action}.js`);
	res.json(await action.run(req.params.data));
});

app.use(express.static('public'))

app.listen(config.port, function () {
	console.log(`PiSwitch listening on port ${config.port}!`);
});

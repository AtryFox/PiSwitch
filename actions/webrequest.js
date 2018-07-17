const config = require('../config/config.js');

class WebRequsetAction {
	run(url) {
		return new Promise(async (fulfill, reject) => {	
				let https;
			if(url.startsWith("http://")) {
				https = require('http');
			} else {
				https = require('https');
			}
				 
			https.get(url, (resp) => {
				let data = '';

				resp.on('data', (chunk) => {
				data += chunk;
				});

				resp.on('end', () => {
					fulfill({ 'status': 'done', 'data': JSON.parse(data).explanation });
				});

				}).on("error", (err) => {
					fulfill({ 'status': 'error', 'data': err.message });
				});
			});
	}
}

module.exports = new WebRequsetAction();
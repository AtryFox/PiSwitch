//const config = require('./config/config.js');

const { spawn } = require('child_process');

class Data {
	sendCode(code) {
		console.log(code);
	
		return new Promise(async (fulfill, reject) => {		
			const child = spawn('bin/codesend', [code])
			fulfill({ 'status': 'done', 'data': code });
		})
	}
}

module.exports = Data;
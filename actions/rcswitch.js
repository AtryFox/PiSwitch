const config = require('../config/config.js');

const { spawn } = require('child_process');

class RcSwitchAction {
	run(code) {
		return new Promise(async (fulfill, reject) => {		
			const child = spawn('bin/codesend', [config.gpio.transmitter, code])
			fulfill({ 'status': 'done', 'data': code });
		})
	}
}

module.exports = new RcSwitchAction();
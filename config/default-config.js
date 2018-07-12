const config = {
	'port': 3010,
	'get': false,
	'gpio': {
		// GPIO pin number https://www.raspberrypi.org/documentation/usage/gpio/
		// used for 433MHz transmitter and receiver
		'transmitter': 2,
		
		// unused
		'receiver': 3
	}
}

module.exports = config;
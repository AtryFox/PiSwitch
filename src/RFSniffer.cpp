/*
  RFSniffer

  Usage: ./RFSniffer pin [pulseLength]
  [] = optional

  Hacked from http://code.google.com/p/rc-switch/
  by @justy to provide a handy RF code sniffer
  
  modified by @DerAtrox 
*/

#include "./rc-switch/RCSwitch.h"
#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>
          
RCSwitch mySwitch;

int main(int argc, char *argv[]) {   
	if(wiringPiSetup() == -1) {
		printf("wiringPiSetup failed, exiting...");
		return 0;
	}
	 
	// If no command line argument is given, print the help text
    if (argc == 1) {
        printf("Usage: %s pin decimalcode [<pulseLength>]\n", argv[0]);
        printf("pin\t\t- GPIO pin of transmitter\n");
        printf("pulselength\t- pulselength in microseconds\n");
        return -1;
    }

	int PIN = atoi(argv[1]);

	int pulseLength = 0;
	if (argc >= 3) pulseLength = atoi(argv[2]);

	mySwitch = RCSwitch();
	if (pulseLength != 0) mySwitch.setPulseLength(pulseLength);
	mySwitch.enableReceive(PIN);  // Receiver on interrupt 0 => that is pin #2
     
	while(1) {
  
		if (mySwitch.available()) {
    
			int value = mySwitch.getReceivedValue();
		
			if (value == 0) {
				printf("Unknown encoding\n");
			} else {    
	   
				printf("Received %i\n", mySwitch.getReceivedValue() );
			}
		
			fflush(stdout);
			mySwitch.resetAvailable();
		}
     
		usleep(100); 
	}

	exit(0);
}


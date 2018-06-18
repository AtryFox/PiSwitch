#include "./rc-switch/RCSwitch.h"
#include <stdlib.h>
#include <stdio.h>
     
int main(int argc, char *argv[]) { 
    int protocol = 0;
    int pulseLength = 0;

    if (argc == 1) {
        printf("Usage: %s pin decimalcode [protocol] [pulselength]\n", argv[0]);
        printf("pin\t\t- GPIO pin of transmitter\n");
        printf("decimalcode\t- As decoded by RFSniffer\n");
        printf("protocol\t- According to rc-switch definitions\n");
        printf("pulselength\t- pulselength in microseconds\n");
        return -1;
    }

	int PIN = atoi(argv[1]);
    int code = atoi(argv[2]);
    if (argc >= 4) protocol = atoi(argv[3]);
    if (argc >= 5) pulseLength = atoi(argv[4]);
    
    if (wiringPiSetup () == -1) return 1;
	
    RCSwitch mySwitch = RCSwitch();
	
    if (protocol != 0) mySwitch.setProtocol(protocol);
    if (pulseLength != 0) mySwitch.setPulseLength(pulseLength);
	
    mySwitch.enableTransmit(PIN);
    mySwitch.send(code, 24);
	
	printf("sent code[%i]\n", code);
    
    return 0;

}

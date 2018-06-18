
# Defines the RPI variable which is needed by rc-switch/RCSwitch.h
CXXFLAGS=-DRPI
MKDIR_P = mkdir -p

all: codesend RFSniffer

codesend: src/rc-switch/RCSwitch.o src/codesend.o
	$(MKDIR_P) bin
	$(CXX) $(CXXFLAGS) $(LDFLAGS) $+ -o bin/$@ -lwiringPi -lwiringPiDev -lcrypt
	
RFSniffer: src/rc-switch/RCSwitch.o src/RFSniffer.o
	$(MKDIR_P) bin
	$(CXX) $(CXXFLAGS) $(LDFLAGS) $+ -o bin/$@ -lwiringPi -lwiringPiDev -lcrypt
	
clean:
	$(RM) src/rc-switch/*.o src/*.o
	$(RM) -r bin/


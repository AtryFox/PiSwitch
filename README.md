GitLabs PiSwitch
========

Simple web-based remote control for custom actions, like switching on or off radio controlled sockets or external APIs.


## Preview ##
<img src="https://raw.githubusercontent.com/DerAtrox/PiSwitch/12ed59b2902935116510a72e707af9de039ad84a/preview.png">


## Requirements ##
- Node.js 8 or higher
- Node.js module [PM2](http://pm2.keymetrics.io/)
- [WiringPi](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/)


## Preparing ##
Clone this repository on your Pi:
```bash
git clone https://github.com/DerAtrox/PiSwitch.git
```

Make `run.sh` executable:
```bash
chmod +x ./run.sh
```


## Configuring ##
### Application configuration ###
The application configuration file is used for interal configuration.

Copy `/config/default-config.js` to `/config/config.js`.

#### Properties ####
|Property                   |Default    |Description
|---------------------------|-----------|------------------------------------
|port                       |3010       |Port used by the web server
|get                        |false      |Enables or disables the API GET endpoints
|gpio.transmitter           |2          |[GPIO pin](https://www.raspberrypi.org/documentation/usage/gpio/) used for 433MHz transmitter
|gpio.receiver              |3          |[GPIO pin](https://www.raspberrypi.org/documentation/usage/gpio/) used for 433MHz receiver (unused)

### Controls configuration ###
In the controls configuration file, you specify which controls with which buttons and actions should be displayed.

Create a new file in the `/public/` named `controls.js` or move the existing examples file (`/public/controls-example.js`) to `/public/controls.js`.

#### Definition ####
In the context of this application a control is a set of buttons, which each can perform different actions, together with a title and some other information.
In the preview above, we have three different controls. One named "Speaker", one named "Lights" and so on.
Each of the buttons of each control can be configured to perform different actions.
One control combines multiple buttons to one "object".
For example a radio controlled outlet would be one control with two buttons: "Turn on" and "Turn off".

For better understanding of this configuration, I also added a [graphic](https://raw.githubusercontent.com/DerAtrox/PiSwitch/77f04c26caf64eaf834ac05b51063ca1f509278e/preview_desc.png) describing, what is what.

#### Properties ####
|Property                   |Optional |Description
|---------------------------|---------|------------------------------------
|controls[]                 |no       |Array containing all different controls to display
|controls[].title           |no       |Title of the control
|controls[].sub             |yes      |Subtitle of the control
|controls[].description     |yes      |Description of  the control
|controls[].icon            |yes      |[Font Awesome 5](https://fontawesome.com/) icon of the control. Example: `fas fa-lightbulb`
|controls[].buttons[]       |yes      |Array containing all buttons of the control. Each control should have at least one button
|controls[].buttons[].lable |yes	  |Label (text) of the button
|controls[].buttons[].bt-icon|yes     |Icon of the button (see `controls.icon`)
|controls[].buttons[].actions[]|yes   |Array containing all actions the button should perform on click
|controls[].buttons[].actions[].action|no|Name of the action to perform
|controls[].buttons[].actions[].data|no|Data to pass to the action


## Running and updating ##

Run `run.sh` to compile all the binaries and to start and daemonize PiSwitch with PM2.
```bash
./run.sh
```

After that you can use PM2 to start, stop, restart or monitor PiFrame.

Now you can just open your browser and navigate to your Pi with the port you chose, for example `http://raspberry:3010/`.

To update PiSwitch, just run the start script (`run.sh`) again.

**Note**: Running the start script will reset everything in the directory, except Node.js modules, configurations in `/config/`, custom sources in `/src/custom/` and custom actions in `/actions/` to the last commit in this repository#master.


## Actions ##

Actions are scripts which are executed when a button is pressed. By default there are only two actions, though more actions are planned in the future.

- `rcswitch` - sends a code via an 433 MHz transmitter
- `webrequest` - sends a simple web request to for example another API

### Adding your own Actions ###
*Detailed documentation coming soon..*


## Libraries, Frameworks, Fonts and APIs ##
This project is made possible by these awesome libraries, frameworks, fonts and APIs, go check them out!

- [Node.js](https://nodejs.org/) - Node.js JavaScript runtime
- [PM2](https://pm2.keymetrics.io/) - Node.js Production Process Manager with a built-in Load
- [Express](http://expressjs.com/de/) - Fast, unopinionated, minimalist web framework for node
- [Wiring Pi](http://wiringpi.com/) - PIN based GPIO access library for all versions of the Raspberry Pi
- [Bootstrap](https://getbootstrap.com/) - The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web
- [jQuery](https://jquery.com/) - jQuery JavaScript Library
- [Font Awesome](https://fontawesome.com/) - The iconic SVG, font, and CSS toolkit
- [Google Fonts](https://fonts.google.com/) - Making the web more beautiful, fast, and open through great typography

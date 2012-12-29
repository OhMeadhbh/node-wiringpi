#!/usr/bin/env node

/* blinkin.js
**
** Copyright (c) 2012 Meadhbh S. Hamrick, All Rights Reserved
**
** @License( https://raw.github.com/OhMeadhbh/node-wiringpi/master/LICENSE )
**
** This is a simple example of the node-wiringpi package. It assumes you have
** LEDs attached to pins 0, 1 & 2. Check out this URL for a good guide to 
** hooking up LEDs to a Raspberry Pi:
**
**   https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/
**
*/

var wiringpi = require( './node-wiringpi' );

wiringpi.pin_mode( 0, wiringpi.PIN_MODE.OUTPUT );
wiringpi.pin_mode( 1, wiringpi.PIN_MODE.OUTPUT );
wiringpi.pin_mode( 2, wiringpi.PIN_MODE.OUTPUT );

var HIGH = wiringpi.WRITE.HIGH;
var LOW  = wiringpi.WRITE.LOW;

var pattern = [
  [ LOW , LOW , LOW  ],
  [ LOW , LOW , HIGH ],
  [ LOW , HIGH, HIGH ],
  [ LOW , HIGH, LOW  ],
  [ HIGH, HIGH, LOW  ],
  [ HIGH, LOW , LOW  ],
  [ HIGH, LOW , HIGH ],
  [ HIGH, HIGH, HIGH ]
];

var index = 0;

setInterval( function () {
  var current = pattern[ index ];

  for( var i = 0, il = current.length; i < il; i++ ) {
    wiringpi.digital_write( i, current[i] );    
  }

  index = ( index + 1 ) % pattern.length;
}, 125 );


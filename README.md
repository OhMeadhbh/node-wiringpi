node-wiringpi
=============

Extremely simple node wrapper for @drogon's wiringPi library (for blinky lights &amp; gpio w/ RaspberryPi)

## Caution

This package assumes you know how to safely handle electronics and program
GPIO pins. It's concievable you _could_ damage yourself or your Raspberry Pi
with improper circuit design or improper use of software interfaces. While the
author of this package has made reasonable efforts to insure the accuracy of
the information and code contained within, it comes with absolutely no
warranty or guarantee of correctness.

## Pre-Requisites

Before installing and/or building this package, please make sure you have
the wiringPi library and the node-gyp package installed. WiringPi info can
be found at <a href="https://projects.drogon.net/raspberry-pi/wiringpi/">https://projects.drogon.net/raspberry-pi/wiringpi/</a>. Node-Gyp info can be found
at <a href="https://github.com/TooTallNate/node-gyp">https://github.com/TooTallNate/node-gyp</a>.

## Installation

The easiest way to install this package is via npm:

<pre>    npm install node-wiringpi</pre>

Or, you can check out the source using git:

<pre>    git clone git://github.com/OhMeadhbh/node-wiringpi.git</pre>

## Building

If the package wasn't automagically built when you installed via npm, this
command _should_ do the trick:

<pre>    node-gyp configure build</pre>

You'll have problems if you haven't installed node-gyp or libwiringPi.

## Testing

I wrote a very simple LED blinker (this assumes you have a RPi w/ LEDs attached
to GPIO pins. To run the program, use the command:

<pre>    sudo node blinkin.js</pre>

You have to run the program as root so it has permission to access /dev/mem.
You _could_ modify the permissions on this file, but please don't do that
unless you understand how big of a security hole you're creating.

## API

We currently only support two wiringPi calls: pinMode() and digitalWrite().
Hopefully the only thing you wanted to do was to write to the GPIO ports.

Start off by requiring the package:

<pre>    var wpi = require( 'node-wiringpi' );</pre>

If you're curious, you can call the num_pins() function to find out how many
GPIO pins you have:

<pre>    console.log( "you have " + wpi.num_pins() + " GPIO pins." );</pre>

Before you write to GPIO lines, you should set them in output mode. This
snippit sets pins 0 and 1 into output mode:

<pre>    wpi.pin_mode( 0, wpi.PIN_MODE.OUTPUT );
    wpi.pin_mode( 1, wpi.PIN_MODE.OUTPUT );</pre>

Once in output mode, you can write HIGH or LOW values to the pin. This
sequence turns pins 0 and 1 on and off:

<pre>    wpi.digital_write( 0, wpi.WRITE.LOW );
    wpi.digital_write( 1, wpi.WRITE.LOW );
    wpi.digital_write( 0, wpi.WRITE.HIGH );
    wpi.digital_write( 1, wpi.WRITE.HIGH );</pre>
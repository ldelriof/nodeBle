// require('wireless');

// var wireless = new Wireless({
//     iface: 'wlan0',
//     updateFrequency: 10, // Optional, seconds to scan for networks
//     connectionSpyFrequency: 2, // Optional, seconds to scan if connected
//     vanishThreshold: 2 // Optional, how many scans before network considered gone
// });

// wireless.enable(function(err) {
//     wireless.start();
// });


var Bleacon = require('bleacon');

var uuid = 'e2c56db5dffb48d2b060d0f5a71096e0';
var major = 0; // 0 - 65535
var minor = 0; // 0 - 65535
var measuredPower = -59; // -128 - 127 (measured RSSI at 1 meter)

Bleacon.startAdvertising(uuid, major, minor, measuredPower);

Bleacon.startScanning();

Bleacon.on('discover', function(b) {
	console.log(b)
    // ...
});
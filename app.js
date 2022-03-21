// Dependencies
const express = require('express');
const app = express();

// Use environment-defined port or default to 3000
let port = process.env.PORT || 3000;

// Set
app.get('/', function(req, res) {
    res.send("Hello World!");
    log("Main page requested");
});

// Set app to listen
app.listen(port, () => {
    console.log('Server listening on port:', port);
    log("Web server started");
});

// Logger
function log(a) {
    console.log(getTime() + " [Server Activity] :", a)
}

function getTime() {
    var now = new Date();
    var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    return time;
}

// test
'use strict'

const shell = require('shelljs');

let args = process.argv.slice(2);
let timeToWait = args[0];
let timeMeassurement = args[1]; 
let scriptName = args[2];
let startImmediate = args[3];
let logging = args[4];

main();

async function main() {
    waitTime = getTimeToWait();
    if (startImmediate) job();
    setInterval(function () {
        job();
    }, waitTime);
}

function job() {
    script = "npm run " + scriptName;
    if (shell.exec(script).code !== 0) console.log('\r\n\ error: Unable to run the identified command.\r\n');
    if (logging) console.log('\r\n ${script} run @ ' + new Date() + '\r\n');
}

function getTimeToWait(){
    let timeValue = 0;

    switch (timeMeassurement) {
        case "h":
            timeValue = timeToWait * 60 * 60 * 1000;
            break;
        case "d":
            timeValue = timeToWait * 24 * 60 * 60 * 1000;
            break;
        case "m":
            timeValue = timeToWait * 60 * 1000;
            break;
        case "s":
            timeValue = timeToWait * 1000;
            break;
        case "ms":
            timeValue = timeToWait;
            break;
        default:
            timeValue = timeToWait * 60 * 1000;
            break;
    }

    return timeValue;
} 

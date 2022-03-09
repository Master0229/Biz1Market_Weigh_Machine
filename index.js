const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline')

// Detect Serial Ports
SerialPort.list().then(function (ports) {
    ports.forEach(function (port) {
        console.log("Port: ", port);
    })
});
const port = new SerialPort({
    path: 'COM1',
    baudRate: 9600,
})

// const parser = new Readline()
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
parser.on("data", (line) => console.log(line))
// port.on('open', () => {
//     // port.emitData('pretend data from device')
// })
port.write("power on")
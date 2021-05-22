var glob = require("glob");

var usb = require('usb')
export default async (req, res) => {
    const devices = usb.getDeviceList();
    debugger;
    const result11 = (await new Promise(resolve => glob("./public/Media/**", (err, files) => { resolve(files) })))//.map(r => r.slice(14));
    debugger;
    const result = (await new Promise(resolve => glob("./public/Media/**", (err, files) => { resolve(files) }))).map(r => r.slice(14));

    res.statusCode = 200;
    res.end(JSON.stringify(result));
}

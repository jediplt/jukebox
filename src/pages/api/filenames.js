var glob = require("glob");
export default async (req, res) => {

    const result = (await new Promise(resolve => glob("./public/Media/**", (err, files) => { resolve(files) }))).map(r => r.slice(14));



    res.statusCode = 200;
    res.end(JSON.stringify(result));
}
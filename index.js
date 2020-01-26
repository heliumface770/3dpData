const fs = require('fs');
const NodeWebcam = require( "node-webcam" );
 
//Return type with base 64 image
var opts = {
    width: 1280,
    height: 720,
    quality: 100,
    output: "png",
    callbackReturn: "base64",
    verbose: true
};

function fileNaming() {
    let date = new Date;
    let formatDate = `${(date.getMonth() + 1).toString()}-${date.getDate().toString()}`
    console.log(formatDate);
}

//capture camera data as base64 string
function snap() {
NodeWebcam.capture( "test_picture", opts, function( err, data ) {
    var image = `<img src='${data}'>`;
    var htmlVar = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${image}
    </body>
    </html>`
    fs.writeFileSync("../../htmlrender.html", html);
});
}

fileNaming();
// snap();
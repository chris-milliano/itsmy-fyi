// Libs for general app
const express = require('express');
const app = express();



//
app.get('/sms', function(req, res) {

    console.log("hit sms");

    res.json({ message: "sms sent" });

    console.log("sms out");
});


// TODO: This is where all server/api routing will happen



// Static serve all files in ng generated dist folder
app.use(express.static(__dirname + '/itsmy-fyi-site/dist'));


// NOTE: This needs to be the last route since it is a wildcard
// Pass thru all other routes to the frontend ng router
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/itsmy-fyi-site/dist/index.html');
});


// Start server
let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});

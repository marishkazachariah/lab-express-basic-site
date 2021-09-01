const express = require('express');
const app = express();

//const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
})

app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/views/works.html');
})

app.get('/photo-gallery', (req, res) => {
    res.sendFile(__dirname + '/views/photo-gallery.html');
})

// start the server
app.listen(3000, function() {
    console.log("Server listening on port 3000");
})
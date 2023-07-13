let express = require('express');
const path = require('path');

let app = express();
const port = process.env.PORT || 5000;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'templates/index.html'));
});

app.listen(5000);
console.log('Server started at http://localhost:' + port);
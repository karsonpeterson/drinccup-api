const express = require('express');
const bodyParser = require('body-parser');
const ws = require('ws');
var DB = require('./db/db-connect');

var port = process.env.PORT || 3000;

const app = express();
app.set('DB', DB);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});
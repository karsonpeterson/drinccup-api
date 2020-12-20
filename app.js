const express = require('express');
const bodyParser = require('body-parser');
const ws = require('ws');
var DB = require('./db/db-connect');

var roomRouter = require('./routes/rooms');

var port = process.env.PORT || 3000;

const app = express();

app.use('/room', roomRouter);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});
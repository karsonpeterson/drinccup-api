var express = require('express');
var router = express.Router();
var roomController = require('../controllers/roomController');

router.post('/new-room', roomController.createRoom);

module.exports = router;
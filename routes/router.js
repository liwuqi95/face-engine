var express = require('express');
var router = express.Router();
var path = require('path');

//index page
router.get('/', function (httpRequest, httpResponse) {
    httpResponse.sendFile(path.join(__dirname, '../public/view/index.html'))
});

module.exports = router;
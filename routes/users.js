var express = require('express');
var router = express.Router();
var controller = require('./user.controller');

/* GET users listing. */
router.get('/api/users', function (req, res) {
    res.send('respond with a resource');
});

router.get('/', controller.index);

module.exports = router;

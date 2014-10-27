var express = require('express');
var router = express.Router();
var util = require("util");

router.get('/', function (req, res) {
    req.db.files.find().toArray(function (error, files) {
        if (error) return next(error);
        res.render('align', {
            files: files || [],
            title: 'EGA',
            id: 'align'
        });
    });
});

router.post('/', function (req, res, next) {
    console.log(util.inspect(req.body));
    req.session.flash = {
        type: 'info',
        message: "Start aligning with your parameters: " + JSON.stringify(req.body)
    };
    res.redirect(303, '/process');
});

module.exports = router;
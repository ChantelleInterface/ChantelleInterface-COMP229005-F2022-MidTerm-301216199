// Student name: Chantelle Lawson
// Student number: 301216199
// Assignment Due Date: October 29th 2022
// Filename: index.js

exports.home = function(req, res, next) {
    console.log('===> Original URL: ' + req.session.url);
    res.render('index', { 
        title: 'Home',
        userName: req.user ? req.user.username : ''
    });
};
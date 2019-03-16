
const express = require('express');

const users = [];

const router = express.Router();

router.post('/add-user', (req, res, next) => {    
    users.push({ username: req.body.username });    
    res.redirect('/users');    
});

router.get('/users', (req, res, next) => {
    res.render('users', { pageTitle: 'Users', users: users });
});

exports.router = router;
exports.users = users;
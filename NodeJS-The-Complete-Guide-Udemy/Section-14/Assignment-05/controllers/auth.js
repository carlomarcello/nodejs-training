const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  if (req.session.user) {
    console.log('Logged in user is ' + req.session.user.name);
  }
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {  
  User.findById('5c58c57962cd1b1740569e02')
    .then(user => {      
      req.session.user = user;
      req.session.isLoggedIn = true;
      res.redirect('/');                  
    })
    .catch(err => console.log(err));
};



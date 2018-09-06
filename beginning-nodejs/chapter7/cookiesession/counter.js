var express = require('express');
var cookieSession = require('cookie-session');

var app = express()
    .use(cookieSession({
        keys: ['my super secret sign key']
    }))
    // You can pass additional options in the cookieSession function (in addition to keys). 
    // To specify the cookie name that the session is stored against, you can pass in the 
    // name option. By default, the cookie name will be express:sess.  
    // A few other options for cookie are also supported such as maxage, path, 
    // httpOnly (true by default), and signed (true by default).
    .use('/home', function (req, res) {
        if (req.session.views) {
            req.session.views++;
        }
        else{
            req.session.views = 1;
        }
        res.end('Total views for you: ' + req.session.views);
    })
    .use('/reset',function(req,res){
        delete req.session.views;
        res.end('Cleared all your views');
    })
    .listen(3000);

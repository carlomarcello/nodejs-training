var express = require('express');
var cookieParser = require('cookie-parser');

var app = express()
    .use(cookieParser('my super secret sign key'))
    .use('/toggle', function (req, res) {        
        if (req.signedCookies.name) {
            res.clearCookie('name');
            res.end('name cookie cleared! Was:' + req.signedCookies.name);
        }
        else {
            res.cookie('name', 'foo', { signed: true, httpOnly: true }); 
            // "httpOnly: true" does not allow access to the cookie by the javascript in the browser
            // the cookie is only accessible by the server
            res.end('name cookie set!');

            // Extra note:
            // You should use HTTPS on all your public servers. 
            // HTTPS ensures that all headers, including the cookie header, are encrypted and safe 
            // from man in the middle attacks. To ask the browser to never send a particular cookie
            // over HTTP and only use it for HTTPS, you can set the secure flag, that is, 
            // res.cookie(name,value,{secure: true})

            // Extra note 2:
            // You should always set the expiry if you want cookies to persist over a period of time. 
            // You can do that by passing in a maxAge option to setCookie, which takes the number of
            // milliseconds for which this cookie will be valid and sent in client requests:
            // res.cookie(name,value,{maxAge: 900000})
        }
    })
    .listen(3000);

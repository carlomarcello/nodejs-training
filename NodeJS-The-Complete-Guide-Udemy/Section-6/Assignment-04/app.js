
const express = require('express');
const bodyParser = require('body-parser');

const users = require('./routes/users');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

const router = express.Router();

router.get('/', (req, res, next) => {    
    res.render('index', { pageTitle: 'Index' });
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
app.use(users.router);
app.listen(3000);
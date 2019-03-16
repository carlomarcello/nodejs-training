

const express = require('express');
const path = require('path');
const rootDir = require('./util/path');

const app = express();
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'root.html'));
});

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'users.html'));
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

app.listen(3000);



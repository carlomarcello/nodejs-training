
const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('Inside first middleware');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Inside second middleware');
//     res.send('<h1>The response here</h1>');
// });

app.use('/users', (req, res, next) => {
    res.send('<h1>Inside /users</h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Inside /</h1>');
});

app.listen(3000);

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth.js');
const cors = require('cors');
const app = express();

app.use(express.static('./client/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/user', authRoute);
app.use(cors());

app.get('/*', function (req, res) {
    res.sendFile(path.resolve('client/public/index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
});

module.exports = app;
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth');
const app = express();

app.use(express.static('./client/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/user', authRoute)

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/public/index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
});

module.exports = app;
const mongoose = require('mongoose');
require('dotenv').config();

let MONGODB_URI = '';

if (process.env.NODE_ENV === 'production') {
    MONGODB_URI = process.env.MONGODB_CLOUD
} else {
    MONGODB_URI = process.env.MONGODB_LOCAL
}

mongoose.connect(`${MONGODB_URI}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('Connected to Mongo')
});

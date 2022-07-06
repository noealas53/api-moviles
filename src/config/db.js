const mongoose = require('mongoose');
const debug = require('debug')('databasejs:server');

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        debug('connected to db');
    })
    .catch((error) => {
        debug('error connecting to db: ' + error);
    })
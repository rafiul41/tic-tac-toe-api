const mongoose = require('mongoose');
const logSchemaTemplate = require('./schema');

const logSchema = new mongoose.Schema(logSchemaTemplate);

const Log = mongoose.model('Log', logSchema);

module.exports = Log;

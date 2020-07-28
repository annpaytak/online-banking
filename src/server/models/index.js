const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.cards = require("./card.model")(mongoose);

db.ROLES = ["user", "admin", "moderator"];
module.exports = db;

// const Client = require('./client');
// const Card = require('./card');
// const Transaction = require('./transaction');
//
// exports.Client = Client;
// exports.Card = Card;
// exports.Transaction = Transaction;

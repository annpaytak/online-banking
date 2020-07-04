const { Schema, model, Types } = require('mongoose');
const timestamps = require('mongoose-timestamp');

const Transaction = require('./transaction');

// const TransactionSchema = new Schema({
//     id: Number,
//     expenseAmount: Number,
//     cashbackPercentage: Number,
//     balanceAfter: Number,
//     name: String,
//     category: String
// }, { collection: "transaction" });//

const CardSchema = new Schema({
    // clientId: Number,
    // id: Number,
    balance: Number,
    number: Number,
    expiryDate: Number,
    cvc: Number,
    history: Array//[TransactionSchema.schema]//
}, { collection: "clients" });//cards



CardSchema.plugin(timestamps) // automatically adds createdAt and updatedAt timestamps

module.exports = model('Card', CardSchema);

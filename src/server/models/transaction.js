const { Schema, model } = require('mongoose');
const timestamps = require('mongoose-timestamp');

const TransactionSchema = new Schema({
    id: Number,
    expenseAmount: Number,
    cashbackPercentage: Number,
    balanceAfter: Number,
    name: String,
    category: String
}, { collection: "transaction" });

TransactionSchema.plugin(timestamps) // automatically adds createdAt and updatedAt timestamps

module.exports = model('Transaction', TransactionSchema);

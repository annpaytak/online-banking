const { Schema, model } = require('mongoose');
const bcrypt = require('mongoose-bcrypt');
const timestamps = require('mongoose-timestamp');

const Card = require('./card');

const ClientSchema = new Schema({
    id: Number,
    password: String,
    name:  {
        first: { type: String, trim: true },
        last: { type: String, trim: true },
        middle: { type: String, trim: true },
    },
    phone: Number,
    email: {
        type: String,
        lowercase: true,
        trim: true,
        index: true,
        unique: true,
    }
    // card: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Card'
    //     // clientId: Number,
    //     // id: Number,
    //     // balance: Number,
    //     // number: Number,
    //     // expiryDate: Number,
    //     // cvc: Number,
    //     // history: [
    //     //     {
    //     //         id: Number,
    //     //         expenseAmount: Number,
    //     //         cashbackPercentage: Number,
    //     //         balanceAfter: Number,
    //     //         name: String,
    //     //         category: String
    //     //     }
    //     // ]
    // }
}, { collection: "clients" });

ClientSchema.plugin(bcrypt) // automatically bcrypts pswrd
ClientSchema.plugin(timestamps) // automatically adds createdAt and updatedAt timestamps

module.exports = model('Client', ClientSchema);

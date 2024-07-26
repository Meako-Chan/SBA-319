const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    transactionType: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
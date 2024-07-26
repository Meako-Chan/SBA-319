const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    //Ser user to type in users.js
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    accountNumber: {
        type: String,
        required: true,
        unique: true
    },
    balance: {
        type: Number,
        required: true,
    },
    accountType:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Account', AccountSchema);
const express = require('express');
const router = express.Router();
const Transaction = require('../models/transactions');
const Account = require('../models/accounts');

//Get all transactions
router.get('/', async(req, res) =>{
    try {
        const transactions = await Transaction.find().populate('account');
        res.render('transactions/index', { transactions });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }  
})

//Get user by id
router.get('/:id', async(req, res) => {
  try {
    let transaction = await Transaction.findById(req.params.id).populate('account');
    if (transaction == null) {
      return res.status(404).json({ message: 'Cannot find transaction' });
    }
    res.render('transactions/show', { transaction: res.transaction });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});



module.exports = router;


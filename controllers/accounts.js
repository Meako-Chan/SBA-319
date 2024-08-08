const express = require('express');
const router = express.Router();
const Account = require('../models/accounts');
const User = require('../models/users');

//Get all accounts
router.get('/', async(req, res) =>{
    try{
        const accounts = await Account.find().populate('user');
        res.render('accounts/index', { accounts });
    } catch (err){
        res.status(500).send(err.message);
    }
})

//Get user by account
router.get('/:id', async(req, res) => {
    try {
        let account = await Account.findById(req.params.id).populate('user');
        if (account == null) {
          return res.status(404).json({ message: 'Cannot find account' });
        }
        res.render('accounts/show', {account: res.account});
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
});

//Create new account
router.post('/', async(req, res) =>{
    const account = new Account({
    user: req.body.user,
    accountNumber: req.body.accountNumber,
    balance: req.body.balance,
    accountType: req.body.accountType
  });

  try {
    const newAccount = await account.save();
    res.redirect('/accounts');
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
})


module.exports = router;


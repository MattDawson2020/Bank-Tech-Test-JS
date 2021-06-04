'use strict';
class Account {
  constructor() {
    this.transactionHistory = []
  }


  balance = () => {
    return this.transactionHistory.map((transaction) => transaction.amount).reduce((sum, amount) => sum + amount, 0)
  }

  deposit = (amount) => {
    this._validate_deposit(amount)
    this.transactionHistory.push(new Transaction(new Date(), amount, amount += this.balance()))
  }

  withdraw = (amount) => {
    this._validate_withdrawal(amount)
    this.transactionHistory.push(new Transaction(new Date(), -amount, amount += this.balance()))
  }

  _validate_deposit = (amount) => {
    if( typeof amount !== 'number') {
      throw new Error('Invalid input type')
    }
  }

  _validate_withdrawal = (amount) => {
    if( typeof amount !== 'number') {
      throw new Error('Invalid withdrawal request') 
    } else if (amount > this.balance() ) {
      throw new Error('Insufficient funds') 
    }
  }

}
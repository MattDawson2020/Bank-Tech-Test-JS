'use strict;'
class Account {
  constructor() {
    this.balance = 0
    this.transaction_history = []
  }

  deposit = (amount) => {
    this._validate_deposit(amount)
    this.balance += amount
    this.transaction_history.push(new Transaction(new Date(), amount, this.balance))
  }

  withdraw = (amount) => {
    this._validate_withdrawal(amount)
    this.balance -= amount
    this.transaction_history.push(new Transaction(new Date(), -amount, this.balance))
  }

  _validate_deposit = (amount) => {
    if( typeof amount !== 'number') {
      throw new Error('Invalid input type')
    }
  }

  _validate_withdrawal = (amount) => {
    if( typeof amount !== 'number') {
      throw new Error('Invalid withdrawal request') 
    } else if (amount > this.balance ) {
      throw new Error('Insufficient funds') 
    }
  }

}
'use strict;'
class Account {
  constructor() {
    this.balance = 0
    this.transaction_history = []
  }

  deposit = (amount) => {
    if( typeof amount !== 'number') {
      throw new Error('Invalid input type')
    }
    this.balance += amount
    this.transaction_history.push(new Transaction(new Date(), amount, this.balance))
  }

  withdraw = (amount) => {
    if( typeof amount !== 'number') {
      throw new Error('Invalid withdrawal request')
    }
    this.balance -= amount
    this.transaction_history.push(new Transaction(new Date(), -amount, this.balance))
  }

}
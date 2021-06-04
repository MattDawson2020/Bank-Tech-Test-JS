'use strict;'
class Account {
  constructor() {
    this.balance = 0
  }

  deposit = (amount) => {
    if( typeof amount !== 'number') {
      throw new Error('Invalid input type')
    }
    this.balance += amount
  }

  withdraw = (amount) => {
    if( typeof amount !== 'number') {
      throw new Error('Invalid withdrawal request')
    }
    this.balance -= amount
  }

}
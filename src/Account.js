'use strict;'
class Account {
  constructor() {
    this.balance = 0
  }

  deposit = (amount) => {
    console.log(typeof amount)
    if( typeof amount !== 'number') {
      throw new Error('Invalid input type')
    }
    this.balance += amount
  }

}
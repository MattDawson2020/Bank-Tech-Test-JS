'use strict';

describe('statement', function() {
  let statement;
  let transaction;
  let transaction2;
  let account;

  beforeEach(function() {
    transaction = jasmine.createSpyObj('transaction', {}, {time: new Date(), amount: 1000, balance: 1000 });
    transaction2 = jasmine.createSpyObj('transaction', {}, {time: new Date(), amount: -500, balance: 500 });
    account = jasmine.createSpyObj('account', {}, { transactionHistory: []})
    account.transactionHistory.push(transaction)
    account.transactionHistory.push(transaction2)
    statement = new Statement(account)
  })

  it('has an mocked account and transaction', function() {
    expect(statement.account).toBeDefined()
    expect(statement.account.transactionHistory).toBeDefined()
    expect(statement.account.transactionHistory[0]).toBeDefined()
    expect(statement.account.transactionHistory[0].amount).toBe(1000)
  })

  it('can print a statement', function() {
    let result = statement.printStatement()
    let time = new Date()
    expect(result).toEqual([
      "Date || Credit || Debit || Balance",
      `${time.toLocaleDateString()} || || 500.00 || 500.00`,
      `${time.toLocaleDateString()} || 1000.00 || || 1000.00` 
      // i have decided to return this in the form of an array because:
      // A: when returning a string with \n to break it up these were returned by the print statement
      // B: in a more realistic use of JS, the print statement would return an array of strings which would be extracted to HTML
      // and displayed on the page. 
      // previous commit has it returned as a divided string, if this is a better method please elaborate how to fix \n issue
    ])
  })

})
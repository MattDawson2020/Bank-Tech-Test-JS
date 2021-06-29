'use strict';

describe('statement', function() {
  let statement;
  let transaction;
  let account;

  beforeEach(function() {
    transaction = jasmine.createSpyObj('statement', {}, {time: new Date(), amount: 1000, balance: 1000 });
    account = jasmine.createSpyObj('account', {}, { transactionHistory: []})
    account.transactionHistory.push(transaction)
    statement = new Statement(account)
  })

  it('has an mocked account and transaction', function() {
    console.log(statement)
    expect(statement.account).toBeDefined()
    expect(statement.account.transactionHistory).toBeDefined()
    expect(statement.account.transactionHistory[0]).toBeDefined()
    expect(statement.account.transactionHistory[0].amount).toBe(1000)
  })

})
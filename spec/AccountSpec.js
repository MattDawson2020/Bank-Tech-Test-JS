'use strict';

describe("Transaction", function() {
  var account;

  beforeEach(function() {
    account = new Account()
  });

  describe("#deposit", function() {
    it("Can deposit funds", function() {
      account.deposit(500)
      expect(account.balance()).toEqual(500)
    });

    it("Can deposit decimals", function() {
      account.deposit(500.95)
      expect(account.balance()).toEqual(500.95)
    });

    it("Can only deposit integers and floats", function() {
      expect(function() { account.deposit("money") }).toThrowError(Error, "Invalid input type")
      expect(function() { account.deposit([500]) }).toThrowError(Error, "Invalid input type")
    });

    it('Creates and stores a transaction object with a deposit', function(){
      account.deposit(500)
      expect(account.transactionHistory[0].amount).toEqual(500)
    });

  });

  describe("#withdraw", function() {

    beforeEach(function() {
      account.deposit(1000)
    })

    it("Can withdraw funds", function() {
      account.withdraw(500)
      expect(account.balance()).toEqual(500)
    });

    it("Can withdraw decimals", function() {
      account.withdraw(500.95)
      expect(account.balance()).toEqual(499.05)
    });

    it("Can only withdraw integers and floats", function() {
      expect(function() { account.withdraw('money') }).toThrowError(Error, 'Invalid withdrawal request')
      expect(function() { account.withdraw([500]) }).toThrowError(Error, 'Invalid withdrawal request')
    });

    it("Cannot withdraw below 0", function() {
      expect(function() { account.withdraw(1001) }).toThrowError(Error, 'Insufficient funds')
    });

    it('Creates and stores a transaction object with a withdrawal', function(){
      account.withdraw(500)
      expect(account.transactionHistory[account.transactionHistory.length -1].amount).toEqual(-500)
    });

  });
  
 
});

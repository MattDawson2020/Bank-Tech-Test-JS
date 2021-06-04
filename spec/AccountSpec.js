'use strict;'
describe("Transaction", function() {
  var account;

  beforeEach(function() {
    account = new Account()
  });

  describe("#deposit", function() {
    it("Can deposit funds", function() {
      account.deposit(500)
      expect(account.balance).toEqual(500)
    });

    it("Can deposit decimals", function() {
      account.deposit(500.95)
      expect(account.balance).toEqual(500.95)
    });

    it("Can only deposit integers and floats", function() {
      expect(function() { account.deposit("money") }).toThrowError(Error, "Invalid input type")
      expect(function() { account.deposit([500]) }).toThrowError(Error, "Invalid input type")
    });

  });
  
 
});

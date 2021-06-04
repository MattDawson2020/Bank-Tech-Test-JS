describe("Transaction", function() {
  var transaction;

  beforeEach(function() {
    transaction = new Transaction(new Date().toLocaleDateString(), 500, 1500);
  });

  it("Has attributes accessible by hash keys", function() {
    expect(transaction.time).toEqual(new Date().toLocaleDateString())
    expect(transaction.amount).toEqual(500)
    expect(transaction.balance).toEqual(1500)
  });

});

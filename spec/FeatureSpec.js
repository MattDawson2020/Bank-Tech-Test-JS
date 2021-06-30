describe("Feature test", function() {

  let account;
  let statement;

  it('User can see correct values on their statement', function() {
    account = new Account
    expect(account.balance()).toEqual(0)

    account.deposit(1000)
    account.withdraw(500)
    expect(account.balance()).toEqual(500)

    statement = new Statement(account)

    let result = statement.printStatement()
    let time = new Date()
    expect(result).toEqual(
      `Date || Credit || Debit || Balance\n${time.toLocaleDateString()} || || 500.00 || 500.00\n${time.toLocaleDateString()} || 1000.00 || || 1000.00`  
    )

  })
})
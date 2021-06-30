describe("Feature test", function() {
  var account;
  beforeEach(function() {
    account = new Account()
  })

  it('User can see correct values on their statement', function() {
    var statement;

    expect(account.balance()).toEqual(0)

    account.deposit(1000)
    account.withdraw(500)
    expect(account.balance()).toEqual(500)

    statement = new Statement(account)

    var result = statement.printStatement()
    var time = new Date()
    expect(result).toEqual(
      `Date || Credit || Debit || Balance\n${time.toLocaleDateString()} || || 500.00 || 500.00\n${time.toLocaleDateString()} || 1000.00 || || 1000.00`  
    )

  })

  it('Statements are correct whenever they are called', function() {
    var statement;
    var statement2;
    
    account.deposit(1000)
    account.withdraw(500)
    console.log(account)
    statement = new Statement(account)
    let result = statement.printStatement()
    let time = new Date()
    expect(result).toEqual(
      `Date || Credit || Debit || Balance\n${time.toLocaleDateString()} || || 500.00 || 500.00\n${time.toLocaleDateString()} || 1000.00 || || 1000.00`  
    )

    account.deposit(600)
    account.withdraw(450)
    console.log(account)
    statement2 = new Statement(account)
    let result2 = statement2.printStatement()
    expect(result2).toEqual(
      `Date || Credit || Debit || Balance\n${time.toLocaleDateString()} || || 450.00 || 650.00\n${time.toLocaleDateString()} || 600.00 || || 1100.00\n${time.toLocaleDateString()} || || 500.00 || 500.00\n${time.toLocaleDateString()} || 1000.00 || || 1000.00`  
    )

  })

})
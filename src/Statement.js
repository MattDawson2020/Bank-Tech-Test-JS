class Statement{
  constructor(account){
    this.account = account
  }

  printStatement = () => {
    let reversedStatement = this.account.transactionHistory.reverse()
    return "Date || Credit || Debit || Balance\n" +
    reversedStatement.map((transaction) => 
      this._formatTransaction(transaction)).join('\n')
  }

  _formatType = (transaction) => {
    if(transaction.amount > 0) {
      return ' || ' + `${Math.abs(transaction.amount)}` + ' || || '
    } else {
      return ' || || ' + `${Math.abs(transaction.amount)}` + ' || '
    }
  }

  _formatTransaction = (transaction) => {
    return transaction.time.toLocaleDateString() +
    this._formatType(transaction) + transaction.balance
  }

}
class Statement{
  constructor(account){
    this.account = account
  }

  printStatement = () => {
    let reversedStatement = this.account.transactionHistory.reverse()
    let formattedStatement = ["Date || Credit || Debit || Balance"].concat(
    reversedStatement.map((transaction) => 
      this._formatTransaction(transaction))
    )
    formattedStatement.forEach((line) => {
      console.log(line)
    }) 
  }

  _formatType = (transaction) => {
    if(transaction.amount > 0) {
      return ' || ' + `${Math.abs(transaction.amount).toFixed(2)}` + ' || || '
    } else {
      return ' || || ' + `${Math.abs(transaction.amount).toFixed(2)}` + ' || '
    }
  }

  _formatTransaction = (transaction) => {
    return transaction.time.toLocaleDateString() +
    this._formatType(transaction) + 
    transaction.balance.toFixed(2)
  }

}
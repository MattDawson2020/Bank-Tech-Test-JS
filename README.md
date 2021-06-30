# Bank-Tech-Test-JS


## Challenge

- Build a Tech Test to given specifications with a focus on clean and readable code
- This is a JavaScript translation of the original challenge found [here](https://github.com/MattDawson2020/Bank-Tech-Test)
- Because of this I already had a good idea how to solve the main issues, so there challenge in this instance was adapting JS syntax and best practice
- The main logic of this was not particularly difficult, the only real issue being the difference in how JS returns/logs strings with new line breaks not being obvious


### Specification

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```


## Feedback and changes

<details>
  <summary> What the coach liked </summary>
  
  * Code is high quality and fit the requirements
  
  * Tests are concise and all working correctly
  
  * Use of reduce method over insecure/ accessible balance attribute means someone must access the entire transaction history to see account details
</details>

<details>
  <summary> Improvements to be made </summary>
  
  * Made reference to accessing attributes by hash keys, but this is Ruby syntax, JS uses object attributes instead 
  
  * Should add a feature test to show the entire program works together, writing a feature test that called multiple statements revealed a bug where the transaction formatter would mutate the transaction history
  
</details>


### User Stories
```

As a User
So I can store my money
I would like to make a deposit

As a User
So I can use my money
I would like to make a withdrawal

As a User
So I can see my transaction history
I would like to print my statement


As a Developer
So I can pass my tech test
I would like the print to be formatted like the diagram

```

# How to install and run
<p>&nbsp;</p>

## Setup

-git clone https://github.com/MattDawson2020/Bank-Tech-Test-JS

-bundle

## Run App
### App is currently console based as there was no need to include HTML for a display
- Within the repo type { open SpecRunner.html } to open the test file to see the tests are passing
- Right click and press inspect, to open the developer console, and at the top right click console to open your REPL
- Create an account object { **account = new Account()** }in the console, which defaults to a balance of 0
- Use **account.deposit(amount)** or **account.withdraw(amount)** with amount being an integer or float numeric value
- You can use **account.transaction_history** to see an array of transactions
- To select an individual transaction use **account.transaction_history.transactions** and an array selector { i.e [0] or [1] }
- To create a statement object { **statement = new Statement(account)** } with an injected account object
- To print a statement use **statement.print_statement()**, it will draw data through the injected account and format it for you
<p>&nbsp;</p>


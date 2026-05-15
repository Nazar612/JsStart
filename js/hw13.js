//2. Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.



/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
//  */
// const Transaction = {
//   DEPOSIT: {
//     id:account,
//     type:"deposit",
//     amount:0,
//   },

//   WITHDRAW: {
//     id:account,
//     type:"withdraw",
//     amount:0,
//   },
// };

// /*
//  * Кожна транзакція - це об'єкт з властивостями: id, type і amount
//  */
// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій

//   transactions: [],
//   /*
//    * Метод створює і повертає об'єкт транзакції.
//    * Приймає суму і тип транзакції.
//    */

//   createTransaction(amount, type) {

//     if(type === "deposit") {
//         transactions.push("+" + amount)
//         balance + amount;
//         return balance;
//     } else if(type === "withdraw") {
//         transactions.push("-" + amount);

//         balance - amount;
//         return amount
//     }

//   },
//   /*
//    * Метод відповідає за додавання суми до балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його в історію транзакцій
//    */
//   deposit(amount) {
//     amount = Number(prompt("Введіть сумму яку бажаєте додати"))
//   },

//   /*
//    * Метод відповідає за зняття суми з балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його в історію транзакцій.
//    *
//    * Якщо amount більше, ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливо, недостатньо коштів.
//    */
//   withdraw(amount) {
//     amount = Number(prompt("Введіть сумму яку бажаєте зняти"))
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {},
//   /*
//    * Метод шукає і повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {},

//   /*

//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {},
// };
// const {balance, transactions} = account;

// const {DEPOSIT: {id, type:typeD, amount:amountD}, WITHDRAW: {id, type:typeW, amount:amountW}} = Transaction;



/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */
const account = {
  // Поточний баланс рахунку
  transactionNum: 0,
  balance: 0,

  // Історія транзакцій

  transactions: [],
  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */

  createTransaction(amount, type) {
    const transaction = {
      id:this.transactionNum += 1,
      type:type,
      amount:amount,
    }
    return transaction
  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    if(amount <= 0) {
      return
    }
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));

  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    if(amount <= 0) {
      return
    }
    this.balance -= amount;
    this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance
  },
  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const element of account.transactions) {
      if(element.id === id) {
        return element
      }
    }
  },

  /*

   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let typeAllMoney = 0;
    for (const element of account.transactions) {
      if(element.type === type) {
        typeAllMoney += element.amount
      }
    }
    return typeAllMoney;
  },
};
account.deposit(10000);
account.deposit(10000);
account.deposit(10000);

account.withdraw(2222);
account.withdraw(3333);
account.withdraw(4444);


console.log(account.transactions);
console.log(account.getTransactionDetails(3));
console.log(account.getBalance());
console.log(account.getTransactionTotal('withdraw'));


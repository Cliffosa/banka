let Transactions = [
  {
    id: 1,
    accountNumber: 6886760982,
    createdOn: new Date(Date.now()),
    type: 'credit',
    owner: 1, //user_d
    oldBalance: 500.5,
    newBalance: 10000.5,
    lastWithdrawal: new Date(Date.now()),
    lastDeposit: new Date(Date.now())
  },
  {
    id: 2,
    accountNumber: 996760982,
    createdOn: new Date(Date.now()),
    type: 'debit',
    owner: 2, //user_d
    oldBalance: 500.5,
    newBalance: 1000.5,
    lastWithdrawal: new Date(Date.now()),
    lastDeposit: new Date(Date.now())
  },
  {
    id: 3,
    accountNumber: 908676098,
    createdOn: new Date(Date.now()),
    type: 'credit',
    owner: 3, //user_id
    oldBalance: 400.0,
    newBalance: 200.0,
    lastWithdrawal: new Date(Date.now()),
    lastDeposit: new Date(Date.now())
  }
];
export default Transactions;

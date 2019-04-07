let Accounts = [
  {
    id: 1,
    accountNumber: 6886760982,
    createdOn: new Date(Date.now()),
    type: 'savings',
    owner: 1, //user_d
    status: 'active',
    balance: 500.5,
    lastWithdrawal: new Date(Date.now()),
    lastDeposit: new Date(Date.now())
  },
  {
    id: 2,
    accountNumber: 7809422354,
    createdOn: new Date(Date.now()),
    type: 'current',
    owner: 4, //user_id
    status: 'dormant',
    balance: 1000.5,
    lastWithdrawal: new Date(Date.now()),
    lastDeposit: new Date(Date.now())
  },
  {
    id: 3,
    accountNumber: 908676098,
    createdOn: new Date(Date.now()),
    type: 'savings',
    owner: 3, //user_id
    status: 'draft',
    balance: 400.5,
    lastWithdrawal: new Date(Date.now()),
    lastDeposit: new Date(Date.now())
  }
];

export default Accounts;

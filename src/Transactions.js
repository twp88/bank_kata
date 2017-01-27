function Transactions() {};

Transactions.prototype.updateLeger = function(bankAccount, credit, debit) {
  bankAccount.leger[bankAccount.index] = ['Transaction number; ' + bankAccount.index + '||' + 'Amount credited; ' + credit + '||' + 'Amount debited; ' + debit + '||' + 'The balance is; ' + bankAccount.balance];
};

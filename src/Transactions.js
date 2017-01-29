function Transactions() {};

Transactions.prototype.updateLeger = function(bankAccount, credit, debit) {
  var date = new Now();
  date.date();
  bankAccount.leger[bankAccount.index] = ['Date; '+ date.dat + '||' + 'Transaction number; ' + bankAccount.index + '||' + 'Amount credited; ' + credit + '||' + 'Amount debited; ' + debit + '||' + 'The balance is; ' + bankAccount.balance];
};

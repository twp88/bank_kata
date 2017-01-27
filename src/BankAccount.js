function BankAccount() {
  this.balance = 0;
  this.leger = {};
  this.index = 0;
  trans = new Transactions();
};

BankAccount.prototype.credit = function (amount) {
  this.index += 1
  this.balance += amount;
  trans.updateLeger(this, amount, '0')
};

BankAccount.prototype.debit = function (amount) {
  this.index += 1
  this.balance -= amount;
  trans.updateLeger(this, '0', amount)
};

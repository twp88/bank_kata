describe ("Transactions", function() {

  beforeEach(function(){
    transactions = new Transactions();
    bankAccount = new BankAccount();
    printer = new Printer();
    now = new Now();
    now.date();
  });

  it('should update ba leger', function() {
    bankAccount.index = 1
    bankAccount.balance = 20
    transactions.updateLeger(bankAccount, 20, '0')
    expect(bankAccount.leger[1]).toEqual(["Date; "+ now.dat + "||Transaction number; 1||Amount credited; 20||Amount debited; 0||The balance is; 20"])
  });
});

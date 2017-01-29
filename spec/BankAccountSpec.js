describe ("BankAccount", function() {

  beforeEach(function(){
    bankAccount = new BankAccount();
    transactions = new Transactions();
    now = new Now();
    now.date();
  });

  it('should respond to the test', function() {
    expect(bankAccount.balance).toEqual(0)
  });

  it('should be initiated with an empty array', function(){
    expect(bankAccount.leger).toEqual({})
  });

  it('should credit the account by 10', function() {
    bankAccount.credit(10)
    expect(bankAccount.balance).toEqual(10)
  });

  it('should debit the account by 10', function() {
    bankAccount.debit(10)
    expect(bankAccount.balance).toEqual(-10)
  });

  it('should update leger when using transactions.updateLeger', function() {
    bankAccount.credit(10)
    expect(bankAccount.leger[1]).toEqual(["Date; "+now.dat+"||Transaction number; 1||Amount credited; 10||Amount debited; 0||The balance is; 10"])
  });

  it('should call the transactions.updateleger function from an instance of bankAccount', function() {
    bankAccount.credit(10)
    expect(bankAccount.leger).toEqual
  });

});

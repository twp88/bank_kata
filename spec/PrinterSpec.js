describe ('Printer', function() {

  beforeEach(function(){
    printer = new Printer()
    bankAccount = new BankAccount();
    transactions = new Transactions();
    now = new Now();
    now.date();
  });

  it('should print the balance of the bank account', function() {
    spyOn(console, 'log')
    bankAccount.credit(10)
    printer.print(bankAccount)
    expect(console.log).toHaveBeenCalledWith([ "Date; "+now.dat+"||Transaction number; 1||Amount credited; 10||Amount debited; 0||The balance is; 10" ])
  });
});

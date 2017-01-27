describe ('Printer', function() {

  beforeEach(function(){
    printer = new Printer()
    bankAccount = new BankAccount();
    transactions = new Transactions();
  });

  it('should print the balance of the bank account', function() {
    spyOn(console, 'log')
    bankAccount.credit(10)
    printer.print(bankAccount)
    expect(console.log).toHaveBeenCalledWith([ "Transaction number; 1||Amount credited; 10||Amount debited; 0||The balance is; 10" ])
  });

  it('should expect the final variable to return a date'), function() {
    printer.date();
    expect(printer.date.length).toEqual(10)
  };

});

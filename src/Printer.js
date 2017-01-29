function Printer() {

};

Printer.prototype.print = function (bankAccount) {
  for (var i in bankAccount.leger){
    console.log(bankAccount.leger[i]);
  }
};

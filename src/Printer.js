function Printer() {
  this.d = ''
  this.day = ''
  this.month = ''
  this.year = ''
  this.dat = ''
};

Printer.prototype.print = function (bankAccount) {
  for (var i in bankAccount.leger){
    console.log(bankAccount.leger[i]);
  }
};

Printer.prototype.date = function () {
  this.d = new Date();
  console.log(this.d)
  this.day = d.getDate();
  this.month = d.getMonth();
  this.year = d.getFullYear();
  this.dat = this.day + '/' + this.month + '/' + this.year
};

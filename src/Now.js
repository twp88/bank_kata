function Now() {
  this.d = ''
  this.day = ''
  this.month = ''
  this.year = ''
  this.dat = ''
};

Now.prototype.date = function () {
  this.d = new Date();
  this.day = this.d.getDate();
  this.month = this.d.getMonth() + 1;
  this.year = this.d.getFullYear();
  this.dat = this.day + '/' + this.month + '/' + this.year
};

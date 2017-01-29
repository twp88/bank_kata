describe ('Now', function() {

  beforeEach(function(){
    now = new Now();
  });

  it('should produce a nice date', function() {
    now.date();
    expect(now.dat.length).toEqual(9)
  });
});

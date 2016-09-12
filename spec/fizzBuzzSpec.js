describe("FizzBuzz",function() {
  var miniFizz;

  beforeEach(function() {
    miniFizz = new FizzBuzz();
  });

  it("prints numbers from 1 to 100", function() {
    expect(miniFizz.numbers()).toContain(1);
    expect(miniFizz.numbers()).toContain(100);
  });

});

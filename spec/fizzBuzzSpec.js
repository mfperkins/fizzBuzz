describe("FizzBuzz",function() {
  var miniFizz;

  beforeEach(function() {
    miniFizz = new FizzBuzz();
  });

  it("prints numbers from 1 to 100", function() {
    expect(miniFizz.numbers()).toContain(1);
    expect(miniFizz.numbers()).toContain(100);
  });

  it("prints 'fizz' if number is divisible by 3", function() {
    var output = miniFizz.play();
    expect(output[2]).toEqual("fizz");
    expect(output[4]).toEqual("buzz");
    expect(output[14]).toEqual("fizzbuzz");
    expect(output[57]).toEqual(58);
  })

});

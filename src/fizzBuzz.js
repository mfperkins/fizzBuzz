function FizzBuzz() {

}

FizzBuzz.prototype.numbers = function() {
  var array = []
  for (i = 0; i < 100; i++) {
    array.push(i+1)
  }
  // console.log(array)
  return array
};

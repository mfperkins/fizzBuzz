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

FizzBuzz.prototype.play = function() {
  var array = this.numbers();
  var output = [];
  array.forEach(function(number) {
    if ((number % 3 == 0) && (number % 5 == 0)) {
     output.push("fizzbuzz");
   } else if (number % 5 == 0) {
     output.push("buzz");
   } else if (number % 3 == 0) {
     output.push("fizz");
   } else {
     output.push(number);
   }
 }); return output;
}

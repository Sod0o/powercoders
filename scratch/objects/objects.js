console.log('hello!')

function Person(first, last, interests) {
  this.name = {
    first: first,
    last: last
  };
 this.interests = interests;
 this.greet = function () {
   console.log(`Hello ${this.name.first}`);
 };
}
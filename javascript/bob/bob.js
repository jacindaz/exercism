//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  if (!/[a-z]/i.test(input) && input.slice(-1) == '?') {
    return 'Sure.'
  } else if (input.trim().length == 0) {
    return 'Fine. Be that way!'
  } else if (!/[a-z]/i.test(input)) {
    return 'Whatever.'
  } else if (input == input.toUpperCase()) {
    return 'Whoa, chill out!'
  } else if (input.slice(-1) == '?') {
    return 'Sure.'
  } else {
    return 'Whatever.'
  }
};

module.exports = Bob;

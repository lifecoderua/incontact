angular
  .module('sharedFilters', [])
  .filter('plain', plain);

// converts object to a plain array
function plain() {
  function to_array(input) {
    var plain = [];
    for (var id in input) {
      plain.push(input[id]);
    }
console.log(plain);
    return plain;
  }

  to_array.$stateful = true;

  return to_array;
}
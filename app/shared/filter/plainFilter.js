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
    return plain;
  }

  return to_array;
}
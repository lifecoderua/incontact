angular
  .module('app')
  .directive('simpleInput', simpleInput);

function simpleInput() {
  var directive = {
    templateUrl: '/templates/directives/_simple_input.html',
    scope: {
      name: '@',
      form: '=',
      model: '=',
      as: '@'
    },
    compile: function(element, attrs) {
      attrs.as = attrs.as || "text";
    },
    controller: SimpleInputController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

SimpleInputController.$inject = ['$scope']

function SimpleInputController($scope) {
  var vm = this;

  vm.invalid = '';

  $scope.$watch('vm.form[vm.name].$dirty && vm.form[vm.name].$invalid', function(is_invalid) {
    vm.invalid = is_invalid ? 'has-error' : '';
  });
}

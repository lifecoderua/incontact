angular
  .module('app')
  .directive('contactShow', contactShow);

function contactShow() {
  var directive = {
    templateUrl: '/templates/directives/_show.html',
    controller: ContactShowController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

ContactShowController.$inject = ['$routeParams', 'contactService'];

function ContactShowController($routeParams, contactService) {
  var vm = this;

  vm.id = $routeParams.id;
  // ToDo: move init to the resolve map
  vm.contact = contactService.find(vm.id);
}
angular
  .module('app')
  .directive('contactForm', contactForm);

function contactForm() {
  var directive = {
    templateUrl: '/templates/directives/_form.html',
    controller: ContactFormController,
    controllerAs: 'contactForm',
    bindToController: true
  };

  return directive;
}

ContactFormController.$inject = ['$routeParams', 'contactService'];

function ContactFormController($routeParams, contactService) {
  var vm = this;

  // ToDo: move init to the resolve map
  vm.id = $routeParams.id;
  vm.contact = contactService.find(vm.id);

  vm.save = save;


  function save() {
    contactService.save(vm.contact);
    console.log(vm.contact);
  }
}
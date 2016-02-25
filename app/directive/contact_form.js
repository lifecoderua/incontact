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

ContactFormController.$inject = ['$location', '$routeParams', 'contactService'];

function ContactFormController($location, $routeParams, contactService) {
  var vm = this;

  // ToDo: move init to the resolve map
  vm.id = $routeParams.id;
  vm.contact = contactService.find(vm.id);
  vm.save = save;

  activate();


  function activate() {
    if (vm.contact) {
      vm.contact.birthday = new Date(vm.contact.birthday);
    }
  }

  function save() {
    contactService.save(vm.contact);
    $location.path('/' + vm.contact.id);
  }
}
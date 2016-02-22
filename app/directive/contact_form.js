angular
  .module('app')
  .directive('contactForm', contactForm);

module.exports = contactForm;

function contactForm() {
  var directive = {
    templateUrl: '/templates/directives/_form.html',
    controller: ContactFormController,
    controllerAs: 'contactForm',
    bindToController: true
  };

  return directive;
}

ContactFormController.$inject = ['$routeParams'];

function ContactFormController($routeParams) {
  var vm = this;

  vm.id = $routeParams.id;
}
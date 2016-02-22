angular
  .module('app')
  .directive('contactForm', contactForm);

module.exports = contactForm;

function contactForm() {
  var directive = {
    templateUrl: '/templates/_form.html',
    controller: ContactFormController,
    controllerAs: 'contactForm',
    bindToController: true
  };

  return directive;
}

function ContactFormController() {
  var vm = this;
}
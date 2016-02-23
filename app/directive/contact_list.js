angular
  .module('app')
  .directive('contactList', contactList);

function contactList() {
  var directive = {
    templateUrl: '/templates/directives/contact_list.html',
    controller: ContactListController,
    controllerAs: 'contactList',
    bindToController: true
  };

  return directive;
}

ContactListController.$inject = ['contactService'];

function ContactListController(contactService) {
  var vm = this;

  // vm.view_modes = ['list', 'grid'];
  vm.viewMode = 'list';
  vm.setViewMode = function(mode) { vm.viewMode = mode };
  vm.destroy = function(id) { contactService.destroy(id) };
  vm.contacts = [];

  activate();

  function activate() {
    vm.contacts = contactService.all();
  }

}
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

ContactListController.$inject = ['contactService', 'plainFilter', 'filterFilter'];

function ContactListController(contactService, plainFilter, filterFilter) {
  var vm = this;

  // vm.view_modes = ['list', 'grid'];
  vm.viewMode = 'list';
  vm.setViewMode = function(mode) { vm.viewMode = mode };
  vm.destroy = function(id) { contactService.destroy(id) };
  vm.filters = {
    full_name: '',
    email: '',
    skills: ''
  };
  vm.contacts = [];
  vm.availableSkills = [];


  activate();

  function activate() {
    vm.contacts = contactService.all;
    vm.availableSkills = contactService.getSkills();

    // does not observe initial object. Should it be done by $watch?
    //vm.filteredContacts = filterFilter(plainFilter(contacts), vm.filters);
  }

}
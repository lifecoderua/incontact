angular
  .module('app')
  .directive('contactList', contactList);

module.exports = contactList;

function contactList() {
  var directive = {
    templateUrl: '/templates/contact_list.html',
    controller: ContactListController,
    controllerAs: 'contactList',
    bindToController: true
  };

  return directive;
}

function ContactListController() {
  var vm = this;

  // vm.view_modes = ['list', 'grid'];
  vm.viewMode = 'list';
  vm.contacts = [
    {id: 5, first_name: 'Test', last_name: 'Me'},
    {id: 2, first_name: 'Test2', last_name: 'Me'},
    {id: 3, first_name: 'Test', last_name: 'Me3'},
    {id: 9, first_name: 'Another', last_name: 'Me3'},
    {id: 4, first_name: 'Test', last_name: 'One'}
  ];
  vm.setViewMode = function(mode) { vm.viewMode = mode };

}
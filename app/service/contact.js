angular
  .module('app')
  .factory('contactService', contactService);


contactService.$inject = ['localStorageService'];

function contactService(localStorageService) {
  var service = {
    find: find,
    save: save,
    destroy: destroy,
    all: all
  };

  return service;

  function find(id) {
    return all()[id];
  }

  function save(contact) {
    var contacts = all();
    contacts[contact.id] = contact;
    localStorageService.set('contacts', contacts);
  }

  function all() {
    return localStorageService.get('contacts') || {};
  }

  function destroy(id) {
    var contacts = all();
    contacts[contact.id] = null;
    localStorageService.set('contacts', contacts);
  }
}

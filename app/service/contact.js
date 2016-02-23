angular
  .module('app')
  .factory('contactService', contactService);


contactService.$inject = ['localStorageService'];

function contactService(localStorageService) {
  var contacts = all();
  // cleanup
  // localStorageService.set('contacts', {});

  var service = {
    find: find,
    save: save,
    destroy: destroy,
    all: contacts
  };

  return service;

  function find(id) {
    return contacts[id];
  }

  function save(contact) {
    //var contacts = all();
    // ToDo: better way to filter "full_name"? Model method? Filter?
    contact.full_name = contact.first_name + ' ' + contact.last_name;
    contacts[contact.id] = contact;
    localStorageService.set('contacts', contacts);
  }

  function all() {
    return localStorageService.get('contacts') || {};
  }

  function destroy(id) {
    //var contacts = all();
    delete contacts[id];
    localStorageService.set('contacts', contacts);
  }
}

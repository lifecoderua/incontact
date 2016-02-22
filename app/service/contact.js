angular
  .module('app')
  .factory('contactService', contactService);


contactService.$inject = ['localStorageService'];

function contactService(localStorageService) {
  var service = {
    find: find,
    save: save
  };

  return service;


  function find(id) {
    return localStorageService.get(id);
    //{
    //  id: id,
    //  first_name: 'Another',
    //  last_name: 'Contact'
    //}
  }

  function save(contact) {
    localStorageService.set(contact.id, contact);
    console.log('saved')
  }
}

angular
  .module('app')
  .factory('contactService', contactService);


function contactService() {
  var service = {
    find: find,
    save: save
  };

  return service;


  function find(id) {
    return {
      id: id,
      first_name: 'Another',
      last_name: 'Contact'
    }
  }

  function save(contact) {
    console.log('saved')
  }
}

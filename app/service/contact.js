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
    all: contacts,
    getSkills: getSkills
  };

  return service;

  function find(id) {
    return contacts[id];
  }

  function save(contact) {
    // ToDo: better way to filter "full_name"? Model method? Filter?
    contact.full_name = contact.first_name + ' ' + contact.last_name;
    contacts[contact.id] = contact;
    localStorageService.set('contacts', contacts);
  }

  function all() {
    return localStorageService.get('contacts') || {};
  }

  function destroy(id) {
    delete contacts[id];
    localStorageService.set('contacts', contacts);
  }

  function getSkills() {
    var skills = [];
    for (var id in contacts) {
      console.log(id, contacts[id]);
      skills = skills.concat(
        contacts[id].skills
                    .split(',')
                    .map(function(item){ return item.trim(); })
      );
    }

    skills = skills.filter(function (e, i, arr) {
      return arr.lastIndexOf(e) === i;
    });

    return skills;
  }
}

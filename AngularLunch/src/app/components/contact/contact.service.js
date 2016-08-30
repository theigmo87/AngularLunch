angular
  .module('components.contact')
  .service('ContactService', ContactService);

function ContactService($http) {

    var service = {
        getContactList: getContactList,
        getContactById: getContactById,
        createNewContact: createNewContact,
        updateContact: updateContact,
        deleteContact: deleteContact
    }

    return service;

    function createNewContact(contact) {

    }

    function getContactList() {
        return $http.get('/api/contacts/').then(function(resp){ return resp.data; });
    }

    function getContactById(id) {

    }

    function updateContact(contact) {

    }

    function deleteContact(contact) {

    }
}

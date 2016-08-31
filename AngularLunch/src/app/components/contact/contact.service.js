angular
    .module('components.contact')
    .service('ContactService', ContactService);

function ContactService($http, $q) {

    var service = {
        getContactList: getContactList,
        getContactById: getContactById,
        createNewContact: createNewContact,
        updateContact: updateContact,
        deleteContact: deleteContact
    }

    return service;

    function saveContact(contact) {
        return $http.put('/api/contacts/', contact);
    }

    function getContactList() {
        return $http.get("/api/contacts");
    }

    function getContactById(id) {
        return $http.get('/api/contacts/' + id);
    }

    function updateContact(contact) {
        return $http.put('/api/contacts/', contact);
    }

    function deleteContact(contact) {
        return $http.delete('/api/contacts/', contact);
    }
}

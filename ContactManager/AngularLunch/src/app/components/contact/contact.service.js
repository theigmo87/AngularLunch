angular
    .module('components.contact')
    // this is the name you will use to inject the service
    .service('ContactService', ContactService);

// dependencies will automatically be injected
function ContactService($http) {

    // define the public functions and properties of the service.
    var service = {
        getContactList: getContactList,
        getContactById: getContactById,
        createContact: createContact,
        updateContact: updateContact,
        deleteContact: deleteContact
    }

    // return the public object.
    return service;

    // define the private functions exposed by the public functions
    /* http verbs when communicating to a web api
        get (get)
        post (create)
        put (update)
        delete (delete)
    */
    function getContactList() {
        return $http.get("/api/contacts");
    }

    function getContactById(id) {
        return $http.get('/api/contacts/' + id);
    }

    function createContact(contact) {
        return $http.post('/api/contacts/', contact);
    }

    function updateContact(contact) {
        return $http.put('/api/contacts/', contact);
    }

    function deleteContact(id) {
        return $http.delete('/api/contacts/' + id);
    }
}

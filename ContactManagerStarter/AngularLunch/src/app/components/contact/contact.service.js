angular
    .module('components.contact')
    // this is the name you will use to inject the service
    .service('ContactService', ContactService);

// dependencies will automatically be injected
function ContactService() {
    var baseUrl = "/api/contacts";
    // define the public functions and properties of the service.
    var service = {
        //getContactList:
        //getContactById: 
        //createContact: 
        //updateContact: 
        //deleteContact: 
    }

    // return the public object.
    return service;

    // define the private functions exposed by the public functions, these return a promise
    // the url of the web api is /api/contacts/
    // $http.
    /* http verbs when communicating to a web api
        get (get)
        post (create)
        put (update)
        delete (delete)
    */
}

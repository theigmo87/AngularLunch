angular
    .module('components.contact')
    // since the case of html elements does not matter, any camel case component names will be split by a '-' on case change.
    // example: component's name is 'contactNew', the html tag will be <contact-new>
    .component('contactNew', {
        templateUrl: './contact-new.html',
        controller: NewContactController
    })
    .config(function ($stateProvider) {
        // create a new state
        $stateProvider
            .state('new', {
                // define the url
                url: '/new',
                // define the name of the component
                component: 'contactNew'
            });
    });

// define the controller, dependencies automatically injected
function NewContactController(ContactService, $state) {
    var ctrl = this;
    ctrl.$onInit = onInit;
    ctrl.createContact = createContact;

    // define private functions
    function onInit () {
        ctrl.contact = {};
    };

    function createContact(event) {
        // return a promise that if successful, go to the edit state ('contact') and pass the id ({ id: data.data })
        return ContactService
            .createContact(event.contact)
            .then(function (data) {
                $state.go('contact', {
                    id: data.data
                });
            });
    };
}

angular
    .module('components.contact')
    .component('contacts', {
        // binding names case changes mirror the component's name case change example when defining them as html attributes
        // '<' indicates one way data binding
        // '&' indicates a callback method
        // '=' can be used for string literals
        bindings: {
            contacts: '<'
        },
        templateUrl: './contactList.html',
        controller: ContactListController
    })
    // dependency will automatically be injected
    .config(function ($stateProvider) {
        $stateProvider
            // define a state for this container component
            .state('contacts', {
                // define the url to appear in the address bar
                url: '/',
                // define the name of the component to route to
                component: 'contacts',
                // define any data that needs to resolve before the component is loaded
                resolve: {
                    // dependency automatically injected
                    // define (contacts) as a function that return the promise returned from ContactService.getContactList()
                    contacts: function (ContactService) {
                        return ContactService.getContactList();
                    }
                }
            });
    });

function ContactListController($state) {
    // helps with 'this' problems
    var ctrl = this;

    // set up public methods
    ctrl.$onChanges = onChanges;
    ctrl.goToContact = goToContact;

    // define private methods
    function goToContact(contactId) {
        $state.go('contact', {
            id: contactId
        });
    };

    // $onChanges is called at the beginning of the component lifecycle, even before $onInit
    // This is where we listen for changes to any data bindings
    function onChanges(changesObj) {
        if (changesObj.contacts && changesObj.contacts.currentValue && changesObj.contacts.currentValue.data) {
            ctrl.contacts = changesObj.contacts.currentValue.data;
        }
    };
}
angular
    .module('components.contact')
    .component('contacts', {
        bindings: {
            contacts: '<',
            filter: '<'
        },
        templateUrl: './contacts.html',
        controller: ContactsController
    })
    .config(function ($stateProvider) {
        $stateProvider
            .state('contacts', {
                parent: 'app',
                url: '/contacts',
                component: 'contacts',
                resolve: {
                    contacts: function (ContactService) {
                        return ContactService.getContactList();
                    }
                }
            });
    });

function ContactsController($state) {
    var ctrl = this;
    var contacts = ctrl.contacts;
    console.log(contacts);
    ctrl.goToContact = function (event) {
        $state.go('contact', {
            id: event.contactId
        });
    };
}
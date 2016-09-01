angular
    .module('components.contact')
    .component('contacts', {
        bindings: {
            filter: '<',
            contacts: '<'
        },
        templateUrl: './contacts.html',
        controller: ContactsController
    })
    .config(function ($stateProvider) {
        $stateProvider
            .state('contacts', {
                url: '/',
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
    ctrl.$onChanges = onChanges;
    ctrl.goToContact = goToContact;

    function goToContact(event) {
        $state.go('contact', {
            id: event.contactId
        });
    };

    function onChanges(changesObj) {
        if (changesObj.contacts && changesObj.contacts.currentValue && changesObj.contacts.currentValue.data) {
            ctrl.contacts = changesObj.contacts.currentValue.data;
        }
    };
}
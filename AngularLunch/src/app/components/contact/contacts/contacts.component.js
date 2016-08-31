angular
    .module('components.contact')
    .component('contacts', {
        bindings: {
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
                        console.log("in resolve contacts");
                        return ContactService.getContactList();
                    }
                }
            });
    });

function ContactsController($state) {
    var ctrl = this;

    

    ctrl.goToContact = function (event) {
        $state.go('contact', {
            id: event.contactId
        });
    };

    //this.$onChanges = function (changesObj) {
    //    console.log(changesObj);
    //    if (changesObj.contacts && changesObj.contacts.currentValue) {
    //        console.log(changesObj.contacts.currentValue);
    //    }
    //}    
}
angular
    .module('components.contact')
    .component('contactEdit', {
        templateUrl: './contact-edit.html',
        controller: ContactEditController,
        bindings: {
            contact: '<'
        }
    })
    .config(function ($stateProvider) {
        $stateProvider
            .state('contact', {
                url: '/contact/:id',
                component: 'contactEdit',
                resolve: {
                    contact: function ($transition$, ContactService) {
                        var key = $transition$.params().id;
                        return ContactService.getContactById(key);
                    }
                }
            });
    });

function ContactEditController($state, ContactService, cfpLoadingBar, $window) {
    var ctrl = this;
    ctrl.$onChanges = onChanges;
    ctrl.updateContact = updateContact;
    ctrl.deleteContact = deleteContact;

    function onChanges(changesObj) {
        if (changesObj.contact && changesObj.contact.currentValue && changesObj.contact.currentValue.data)
            ctrl.contact = changesObj.contact.currentValue.data;
    };

    function updateContact(event) {
        cfpLoadingBar.start();
        return ContactService
            .updateContact(event.contact)
            .then(cfpLoadingBar.complete, cfpLoadingBar.complete);
    };

    function deleteContact(event) {
        console.log(event);
        var message = 'Delete ' + event.contact.fullName + ' from contacts?';
        if ($window.confirm(message)) {
            return ContactService
              .deleteContact(event.contact.contactId)
              .then(function () {
                  $state.go('contacts');
              });
        }
    };
}

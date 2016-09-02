angular
    .module('components.contact')
    // since the case of html elements does not matter, any camel case component names will be split by a '-' on case change.
    // example: component's name is 'contactEdit', the html tag will be <contact-edit>
    .component('contactEdit', {
        templateUrl: './contact-edit.html',
        controller: ContactEditController,
        // binding names case changes mirror the component's name case change example when defining them as html attributes
        // '<' indicates one way data binding
        // '&' indicates a callback method
        // '@' can be used for string literals
        bindings: {
            contact: '<'
        }
    })
    .config(function ($stateProvider) {
        $stateProvider
            .state('contact', {
                // define the url
                url: '/contact/:id',
                // define the name of the component
                component: 'contactEdit',
                // define any data that needs to be resolved before loading this component
                resolve: {
                    contact: function ($transition$, ContactService) {
                        var key = $transition$.params().id;
                        return ContactService.getContactById(key);
                    }
                }
            });
    });

// dependencies automatically injected
function ContactEditController($state, ContactService, cfpLoadingBar, $window) {
    var ctrl = this;
    ctrl.$onChanges = onChanges;
    ctrl.updateContact = updateContact;
    ctrl.deleteContact = deleteContact;

    // called first in the lifecycle of the component and everytime the bound properties are updated
    function onChanges(changesObj) {
        if (changesObj.contact && changesObj.contact.currentValue && changesObj.contact.currentValue.data)
            ctrl.contact = changesObj.contact.currentValue.data;
    };

    // function to call the updateContact method in the ContactService
    function updateContact(event) {
        cfpLoadingBar.start();
        return ContactService
            .updateContact(event.contact)
            .then(function () {
                cfpLoadingBar.complete();
                $state.go('contacts');
            },
            cfpLoadingBar.complete);
    };

    // function to call the updateContact method in the ContactService after confirmation alert
    function deleteContact(event) {
        var message = 'Delete ' + event.contact.fullName + ' from contacts?';
        if ($window.confirm(message)) {
            return ContactService
              .deleteContact(event.contact.contactId)
              .then(function () {
                  cfpLoadingBar.complete();
                  $state.go('contacts');
              },
              cfpLoadingBar.complete);
        }
    };
}

angular
    .module('components.contact')
    // since the case of html elements does not matter, any camel case component names will be split by a '-' on case change.
    // example: component's name is 'contactEdit', the html tag will be <contact-edit>
    .component('contactEdit', {
        // define your templateUrl and your controller

        // binding names case changes mirror the component's name case change example when defining them as html attributes
        // '<' indicates one way data binding
        // '&' indicates a callback method
        // '@' can be used for string literals
        // add a one way binding for (contact)

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
    // ctrl.updateContact = ;
    // ctrl.deleteContact = ;

    // called first in the lifecycle of the component and everytime the bound properties are updated
    function onChanges(changesObj) {
        // make sure each object down to what you're looking for exists.
        // this controller's contact needs to be set to the value of changesObj.contact.currentValue.data if it exists.
    };

    // function to call the updateContact method in the ContactService
    // call contact service updateContact, pass in event.contact
    // if the promise resolves successfully, call cfpLoadingBar.complete() and go to 'contacts' state
    // if the promise is rejected, pass in cfpLoadingBar.complete as the callback
    function updateContact(event) {
        cfpLoadingBar.start();
        // return ContactService
    };

    // function to call the updateContact method in the ContactService after confirmation alert
    // call contact service deleteContact, pass in event.contact.contactId
    // if the promise resolves successfully, call cfpLoadingBar.complete() and go to 'contacts' state
    // if the promise is rejected, pass in cfpLoadingBar.complete as the callback
    function deleteContact(event) {
        var message = 'Delete ' + event.contact.fullName + ' from contacts?';
        if ($window.confirm(message)) {
            // return ContactService
        }
    };
}

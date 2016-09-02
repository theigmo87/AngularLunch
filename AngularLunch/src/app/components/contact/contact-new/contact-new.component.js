angular
    .module('components.contact')
    .component('contactNew', {
        templateUrl: './contact-new.html',
        controller: NewContactController
    })
    .config(function ($stateProvider) {
        $stateProvider
            .state('new', {
                url: '/new',
                component: 'contactNew'
            });
    });

function NewContactController(ContactService, $state) {
    var ctrl = this;
    ctrl.$onInit = onInit;
    ctrl.createContact = createContact;

    function onInit () {
        ctrl.contact = {};
    };

    function createContact(event) {
        return ContactService
          .createContact(event.contact)
          .then(function (data) {
              $state.go('contact', {
                  id: data.data
              });
          });
    };
}

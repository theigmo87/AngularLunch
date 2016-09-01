angular
    .module('components.contact')
    .component('contactNew', {
        templateUrl: './contact-new.html',
        controller: ContactNewController
    })
    .config(function ($stateProvider) {
        $stateProvider
            .state('new', {
                url: '/new',
                component: 'contactNew'
            });
    });

function ContactNewController(ContactService, $state) {
    var ctrl = this;
    ctrl.$onInit = onInit;
    ctrl.createNewContact = createNewContact;

    function onInit () {
        ctrl.contact = {
            name: '',
            email: '',
            job: '',
            location: '',
            social: {
                facebook: '',
                github: '',
                twitter: '',
                linkedin: ''
            },
            tag: 'none'
        };
    };

    function createNewContact (event) {
        return ContactService
          .createNewContact(event.contact)
          .then(function (data) {
              $state.go('contact', {
                  id: data.data
              });
          });
    };
}

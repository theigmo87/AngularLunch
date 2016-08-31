angular
    .module('components.contact')
    .component('contact', {
        templateUrl: './contact.html',
        controller: ContactController,
        bindings: {
            contact: '<',
            onSelect: '&'
        }
    });

function ContactController() {
    var vm = this;

    vm.selectContact = function () {
        vm.onSelect({
            $event: {
                contactId: ctrl.contact.$id
            }
        });
    };
}

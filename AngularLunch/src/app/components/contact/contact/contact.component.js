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
    var ctrl = this;
    ctrl.$onChanges = onChanges;
    ctrl.selectContact = selectContact;

    function onChanges(changesObj) {
        if (changesObj.contact && changesObj.contact.currentValue)
            ctrl.contact = changesObj.contact.currentValue;
    }

    function selectContact() {
        ctrl.onSelect({
            $event: {
                contactId: ctrl.contact.contactId
            }
        });
    };
}

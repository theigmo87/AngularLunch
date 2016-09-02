angular
    .module('components.contact')
    .component('contactDetail', {
        templateUrl: './contact-detail.html',
        controller: ContactDetailController,
        bindings: {
            contact: '<',
            onCreate: '&',
            onUpdate: '&',
            onDelete: '&'
        }
    });

function ContactDetailController() {
    var ctrl = this;
    ctrl.$onInit = onInit;
    ctrl.$onChanges = onChanges;
    ctrl.createContact = createContact;
    ctrl.updateContact = updateContact;
    ctrl.deleteContact = deleteContact;

    function onInit() {
        ctrl.isNewContact = !ctrl.contact.contactId;
    };

    function onChanges(changesObj) {
        if (changesObj.contact && changesObj.contact.currentValue)
            ctrl.contact = angular.copy(changesObj.contact.currentValue);
    };

    function createContact() {
        ctrl.onCreate({
            $event: {
                contact: ctrl.contact
            }
        })
    };

    function updateContact() {
        ctrl.onUpdate({
            $event: {
                contact: ctrl.contact
            }
        });
    };

    function deleteContact() {
        ctrl.onDelete({
            $event: {
                contact: ctrl.contact
            }
        });
    };
}
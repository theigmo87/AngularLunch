angular
    .module('components.contact')
    .component('contactDetail', {
        templateUrl: './contact-detail.html',
        controller: ContactDetailController,
        bindings: {
            contact: '<',
            onSave: '&',
            onUpdate: '&',
            onDelete: '&'
        }
    });

function ContactDetailController() {
    var ctrl = this;
    ctrl.$onInit = onInit;
    ctrl.$onChanges = onChanges;
    ctrl.saveContact = saveContact;
    ctrl.updateContact = updateContact;
    ctrl.deleteContact = deleteContact;
    ctrl.tagChange = tagChange;

    function onInit() {
        ctrl.isNewContact = !ctrl.contact.contactId;
    };

    function onChanges(changesObj) {
        if (changesObj.contact && changesObj.contact.currentValue)
            ctrl.contact = changesObj.contact.currentValue;
    };

    function saveContact() {
        ctrl.onSave({
            $event: {
                contact: ctrl.contact
            }
        });
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

    function tagChange(event) {
        ctrl.contact.tag = event.tag;
        ctrl.updateContact();
    };
}
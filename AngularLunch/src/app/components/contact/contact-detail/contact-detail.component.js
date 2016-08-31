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

    ctrl.$onInit = function () {
        ctrl.isNewContact = !ctrl.contact.$id;
    };

    ctrl.$onChanges = function (changesObj) {
        console.log("in contact-detail $onChanges");
    }

    ctrl.saveContact = function () {
        ctrl.onSave({
            $event: {
                contact: ctrl.contact
            }
        });
    };

    ctrl.updateContact = function () {
        ctrl.onUpdate({
            $event: {
                contact: ctrl.contact
            }
        });
    };

    ctrl.deleteContact = function () {
        ctrl.onDelete({
            $event: {
                contact: ctrl.contact
            }
        });
    };

    ctrl.tagChange = function (event) {
        ctrl.contact.tag = event.tag;
        ctrl.updateContact();
    }
}
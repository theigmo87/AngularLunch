angular
    .module('components.contact')
    // since the case of html elements does not matter, any camel case component names will be split by a '-' on case change.
    // example: component's name is 'contactEdit', the html tag will be <contact-edit>
    .component('contactDetail', {
        templateUrl: './contact-detail.html',
        controller: ContactDetailController,
        bindings: {
            // binding names case changes mirror the component's name case change example when defining them as html attributes
            // '<' indicates one way data binding
            // '&' indicates a callback method
            // '=' can be used for string literals
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

    // if a contact was passed in, it will be set by $onChanges before this $onInit function is called
    function onInit() {
        ctrl.isNewContact = !ctrl.contact.contactId;
    };

    // angular.copy so that you don't change the values of the object passed by reference
    function onChanges(changesObj) {
        if (changesObj.contact && changesObj.contact.currentValue)
            ctrl.contact = angular.copy(changesObj.contact.currentValue);
    };

    // add all crud methods that callback to the parent component (who actually performs crud calls to service)
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
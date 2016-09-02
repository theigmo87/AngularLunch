angular
    .module('common')
    .component('app', {
        templateUrl: './app.html',
        controller: AppController
    });

// dependencies will automatically be injected
function AppController($mdSidenav) {
    var ctrl = this;
    // define public methods exposed in the scope of this component
    ctrl.closeMenu = closeMenu;

    // define private methods
    function closeMenu() {
        $mdSidenav('navmenu').close();
    }
}

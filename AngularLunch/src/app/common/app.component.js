angular
    .module('common')
    .component('app', {
        templateUrl: './app.html',
        controller: AppController
    });

function AppController($mdSidenav) {
    var ctrl = this;
    ctrl.closeMenu = closeMenu;

    function closeMenu() {
        $mdSidenav('navmenu').close();
    }
}

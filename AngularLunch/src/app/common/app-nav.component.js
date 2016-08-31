angular
    .module('common')
    .component('appNav', {
        templateUrl: './app-nav.html',
        bindings: {
            user: '<'
        }
    });

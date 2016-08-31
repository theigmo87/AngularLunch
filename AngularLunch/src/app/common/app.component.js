angular
    .module('common')
    .component('app', {
        templateUrl: './app.html',
        controller: AppController
    })
    .config(function ($stateProvider) {
        $stateProvider
            .state('app', {
                redirectTo: 'contacts',
                url: '/app',
                component: 'app'
            })
    });

function AppController() {
    var vm = this;
}

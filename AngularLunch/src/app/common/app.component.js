angular
    .module('common')
    .component('app', {
        templateUrl: './app.html',
        controller: AppController
    });
    //.config(function ($stateProvider) {
    //    $stateProvider
    //        .state('app', {
    //            url: '/app',
    //        })
    //});

function AppController() {
    var vm = this;
}

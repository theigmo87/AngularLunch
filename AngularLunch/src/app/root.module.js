angular
    .module('root', [
        'common',
        'components',
        'templates'
    ])
    .config(function ($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.when('', '/')

        $urlRouterProvider.otherwise('/');

        // $locationProvider.html5Mode(true);
    });

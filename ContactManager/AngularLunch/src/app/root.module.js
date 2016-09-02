// make sure to include all modules that are dependencies that need to be app wide
angular
    // list dependency modules as an array for the second argument
    // this is only done when you are defining a module, not calling it
    .module('root', [
        'ui.router',
        'common',
        'components',
        'templates'
    ])
    // dependencies will automatically be injected
    .config(function ($urlRouterProvider, $locationProvider) {
        //if there isn't any state loaded, load the app
        $urlRouterProvider.when('', '/')

        //a fallback
        $urlRouterProvider.otherwise('/');

        // must first set up IIS to correctly handle this.
        // $locationProvider.html5Mode(true);
    });

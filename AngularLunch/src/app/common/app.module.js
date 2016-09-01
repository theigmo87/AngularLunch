angular
    .module('common', [
        'ui.router',
        'angular-loading-bar',
        'ngMaterial'
    ])
    .run(function ($transitions, cfpLoadingBar, $state) {
        //$transitions.onStart({}, cfpLoadingBar.start);
        //$transitions.onSuccess({}, cfpLoadingBar.complete);
        //$state.go('contacts');
    });

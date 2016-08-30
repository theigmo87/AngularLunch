angular
    .module('root', [
        'common',
        'components',
        'templates'
    ])
    .run(function ($state) {
        $state.go('app');
    });

/**
* @desc simple director that makes the sidenav close on click
* @example <div sidenav-toggle componentid="navId"></div>
*/
angular
    .module('common')
    .directive('sidenavToggle', sidenavToggleDirective);

// dependency will automatically be injected
function sidenavToggleDirective($mdSidenav) {
    // define public object to be returned
    var directive = {
        scope:{
            componentid: '@'
        },
        link: linkFunc
    }

    return directive;

    // define private functions that the public object exposes
    function linkFunc(scope, element, attr, ctrl) {
        element.on('click', function () {
            $mdSidenav(scope.componentid)
                .toggle();
        });
    }
}
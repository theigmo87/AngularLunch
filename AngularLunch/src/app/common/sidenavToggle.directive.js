/**
* @desc simple director that makes the sidenav close on click
* @example <div sidenav-toggle componentid="navId"></div>
*/
angular
    .module('common')
    .directive('sidenavToggle', sidenavToggleDirective);

function sidenavToggleDirective($mdSidenav) {
    var directive = {
        scope:{
            componentid: '@'
        },
        link: linkFunc
    }

    return directive;

    function linkFunc(scope, el, attr, ctrl) {
        el.on('click', function () {
            $mdSidenav(scope.componentid)
                .toggle();
        });
    }
}
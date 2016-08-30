var appNav = {
  bindings: {
    user: '<'
  },
  templateUrl: './app-nav.html'
};

angular
  .module('common')
  .component('appNav', appNav);

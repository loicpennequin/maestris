
'use strict';
angular.module('layout')
  .component('maSidebar', {
    bindings: {
        onLogout: '&'
    },
    templateUrl : 'maSidebar.component.html',
    controller : maSidebarController,
  })

function maSidebarController($location){
  let $ctrl = this;

  $ctrl.activeSection;

  $ctrl.$onInit= function(){
      $ctrl.activeSection = $location.path().substr(7);
  }
};

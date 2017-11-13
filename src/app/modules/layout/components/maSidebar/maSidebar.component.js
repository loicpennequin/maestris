
'use strict';
angular.module('layout')
  .component('maSidebar', {
    bindings: {
        onLogout: '&'
    },
    templateUrl : 'maSidebar.component.html',
    controller : maSidebarController,
  })

function maSidebarController(){
  let $ctrl = this;
};


'use strict';
angular.module('routes')
  .component('maAdminDashboard', {
    templateUrl : 'maAdminDashboard.component.html',
    controller : maAdminDashboardController,
  })

function maAdminDashboardController(){
  let $ctrl = this;

  $ctrl.$onInit = function(){
    $ctrl.name = "maAdminDashboard";
  };
};

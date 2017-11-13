
'use strict';
angular.module('routes')
  .component('maHome', {
    templateUrl : 'maHome.component.html',
    controller : maHomeController,
  })

function maHomeController(){
  let $ctrl = this;

  $ctrl.$onInit = function(){
    $ctrl.name = "maHome";
  };
};
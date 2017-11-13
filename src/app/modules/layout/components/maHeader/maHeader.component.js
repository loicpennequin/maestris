
'use strict';
angular.module('layout')
  .component('maHeader', {
    templateUrl : 'maHeader.component.html',
    controller : maHeaderController,
  })

function maHeaderController(){
  let $ctrl = this;

  $ctrl.$onInit = function(){
    $ctrl.name = "maHeader";
  };
};
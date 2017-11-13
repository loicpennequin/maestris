
'use strict';
angular.module('layout')
  .component('maNavbar', {
    templateUrl : 'maNavbar.component.html',
    controller : maNavbarController,
  })

function maNavbarController(){
  let $ctrl = this;

  $ctrl.$onInit = function(){
    $ctrl.name = "maNavbar";
  };
};
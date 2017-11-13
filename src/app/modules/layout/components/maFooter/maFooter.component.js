
'use strict';
angular.module('layout')
  .component('maFooter', {
    templateUrl : 'maFooter.component.html',
    controller : maFooterController,
  })

function maFooterController(){
  let $ctrl = this;

  $ctrl.$onInit = function(){
    $ctrl.name = "maFooter";
  };
};
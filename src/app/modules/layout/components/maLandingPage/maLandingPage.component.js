
'use strict';
angular.module('layout')
  .component('maLandingPage', {
    templateUrl : 'maLandingPage.component.html',
    controller : maLandingPageController,
  })

function maLandingPageController(){
  let $ctrl = this;

  $ctrl.$onInit = function(){
    $ctrl.name = "maLandingPage";
  };
};
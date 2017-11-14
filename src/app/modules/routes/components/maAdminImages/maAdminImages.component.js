
'use strict';
angular.module('routes')
  .component('maAdminImages', {
    templateUrl : 'maAdminImages.component.html',
    controller : maAdminImagesController,
  })

function maAdminImagesController(){
  let $ctrl = this;

  $ctrl.$onInit = function(){
    $ctrl.name = "maAdminImages";
  };
};
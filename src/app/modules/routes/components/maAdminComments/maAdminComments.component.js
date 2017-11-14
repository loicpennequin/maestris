
'use strict';
angular.module('routes')
  .component('maAdminComments', {
    templateUrl : 'maAdminComments.component.html',
    controller : maAdminCommentsController,
  })

function maAdminCommentsController(){
  let $ctrl = this;

  $ctrl.$onInit = function(){
    $ctrl.name = "maAdminComments";
  };
};
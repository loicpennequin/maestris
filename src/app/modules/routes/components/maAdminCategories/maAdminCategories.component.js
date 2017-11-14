
'use strict';
angular.module('routes')
  .component('maAdminCategories', {
    templateUrl : 'maAdminCategories.component.html',
    controller : maAdminCategoriesController,
  })

function maAdminCategoriesController(){
  let $ctrl = this;

  $ctrl.$onInit = function(){
    $ctrl.name = "maAdminCategories";
  };
};

'use strict';
angular.module('core')
  .component('maArticleListItem', {
    templateUrl : 'maArticleListItem.component.html',
    controller : maArticleListItemController,
  })

function maArticleListItemController(){
  let $ctrl = this;

  $ctrl.$onInit = function(){
    $ctrl.name = "maArticleListItem";
  };
};
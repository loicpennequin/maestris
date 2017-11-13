
'use strict';
angular.module('core')
  .component('maArticlesList', {
    templateUrl : 'maArticlesList.component.html',
    controller : maArticlesListController,
  })

function maArticlesListController(){
  let $ctrl = this;

  $ctrl.$onInit = function(){
    $ctrl.name = "maArticlesList";
  };
};
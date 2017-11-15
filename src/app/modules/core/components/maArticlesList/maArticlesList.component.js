
'use strict';
angular.module('core')
  .component('maArticlesList', {
    bindings: {
        posts: '<'
    },
    templateUrl : 'maArticlesList.component.html',
    controller : maArticlesListController,
  })

function maArticlesListController(){
  let $ctrl = this;

  $ctrl.$onInit = function(){
  };
};

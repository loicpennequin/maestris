
'use strict';
angular.module('core')
  .component('maArticleListItem', {
    bindings: {
        post: '<'
    },
    templateUrl : 'maArticleListItem.component.html',
    controller : maArticleListItemController,
  })

function maArticleListItemController($sce){
  let $ctrl = this;

  $ctrl.$onInit = function(){
      $ctrl.post.body = $sce.trustAsHtml($ctrl.post.body);
  };
};

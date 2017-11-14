
'use strict';
angular.module('admin')
  .component('maPostTable', {
    bindings : {
        posts:'<'
    },
    templateUrl : 'maPostTable.component.html',
    controller : maPostTableController,
  })

function maPostTableController(){
  let $ctrl = this;
};

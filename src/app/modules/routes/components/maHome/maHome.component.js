
'use strict';
angular.module('routes')
  .component('maHome', {
    templateUrl : 'maHome.component.html',
    controller : maHomeController,
  })

function maHomeController(PostFactory){
  let $ctrl = this;

  $ctrl.$onInit = function(){
    $ctrl.getPosts();
  };

  $ctrl.getPosts = function(){
      PostFactory.getAll().then(function(response){
          $ctrl.posts = response.data;
      })
      .catch(function(error){
          console.log(error);
      });
  };
};

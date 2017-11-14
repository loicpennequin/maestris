
'use strict';
angular.module('routes')
  .component('maAdminPosts', {
    templateUrl : 'maAdminPosts.component.html',
    controller : maAdminPostsController,
  })

function maAdminPostsController(PostFactory){
  let $ctrl = this;

  $ctrl.$onInit = function(){
    $ctrl.name = "maAdminPosts";
    $ctrl.newPost = {};
    $ctrl.getPosts();
  };

  $ctrl.getPosts = function(){
      PostFactory.getPosts().then(function(response){
          $ctrl.posts = response.data;
      })
      .catch(function(error){
          console.log(error);
      });
  };

  $ctrl.changeBody = function(model){
      $ctrl.newPost.body = model;
  };

  $ctrl.addPost = function(){
      PostFactory.addPost($ctrl.newPost).then(function(response){
          console.log(response);
      })
      .catch(function(error){
          console.log(error);
      })
  }
};

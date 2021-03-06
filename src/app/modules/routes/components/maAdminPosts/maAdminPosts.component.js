
'use strict';
angular.module('routes')
  .component('maAdminPosts', {
    templateUrl : 'maAdminPosts.component.html',
    controller : maAdminPostsController,
  })

function maAdminPostsController(PostFactory, CategoryFactory){
  let $ctrl = this;

  $ctrl.$onInit = function(){
    $ctrl.name = "maAdminPosts";
    $ctrl.newPost = {};
    $ctrl.getPosts();
    $ctrl.getCategories()
  };

  $ctrl.getPosts = function(){
      PostFactory.getAll().then(function(response){
          $ctrl.posts = response.data;
      })
      .catch(function(error){
          console.log(error);
      });
  };

  $ctrl.getCategories = function(){
      CategoryFactory.getAll().then(function(response){
          $ctrl.categories = response.data;
      })
      .catch(function(error){
          console.log(error);
      });
  };

  $ctrl.changeBody = function(model){
      $ctrl.newPost.body = model;
  };

  $ctrl.addPost = function(){
      PostFactory.add($ctrl.newPost).then(function(response){
          console.log('success');
          console.log(response);
          $ctrl.getPosts();
          alert('Article ajouté avec succès')
          $ctrl.newPost = {};
      })
      .catch(function(error){
          console.log('error');
          console.log(error);
          alert("erreur lors de l'ajout de l'article")
      })
  }
};


'use strict';
angular.module('routes')
  .component('maAdminCategories', {
    templateUrl : 'maAdminCategories.component.html',
    controller : maAdminCategoriesController,
  })

function maAdminCategoriesController(CategoryFactory){
  let $ctrl = this;

  $ctrl.$onInit = function(){
      $ctrl.getCategories();
      $ctrl.newCategory = {};
  };

  $ctrl.getCategories = function(){
      CategoryFactory.getAll().then(function(response){
          $ctrl.categories = response.data;
      })
      .catch(function(error){
          console.log(error);
      });
  };

  $ctrl.addCategory = function(){
      CategoryFactory.add($ctrl.newCategory).then(function(response){
          console.log(response);
          $ctrl.getCategories();
          $ctrl.newCategory = {};
      })
      .catch(function(error){
          alert("Erreur lors de l'ajout de la catégorie.")
      })
  }
};

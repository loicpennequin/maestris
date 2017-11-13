
'use strict';
angular.module('routes')
  .component('maLogin', {
    templateUrl : 'maLogin.component.html',
    controller : maLoginController,
  })

function maLoginController(AuthFactory, $state){
  let $ctrl = this;

  $ctrl.$onInit = function(){
      $ctrl.credentials = {};
      $ctrl.failed = false;
      $ctrl.error = ""
      AuthFactory.isLoggedIn()
        .then(function(response){
            if(response.data.loggedIn === true) $state.go('admin.dashboard')
        })
        .catch(function(error){
            console.log(error);
        })
  }

  $ctrl.login = function(){
      AuthFactory.login($ctrl.credentials).then(function(response){
          if (response.status === 200)
              $state.go('admin.dashboard')
          else{
              $ctrl.failed = true;
          }
      })
      .catch(function(error){
          $ctrl.error = error;
      });
  }
};

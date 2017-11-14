
'use strict';
angular.module('routes')
  .component('maControlPanel', {
    templateUrl : 'maControlPanel.component.html',
    controller : maControlPanelController,
  })

function maControlPanelController(AuthFactory, $state){
  let $ctrl = this;

  $ctrl.$onInit = function(){
      AuthFactory.isLoggedIn()
        .then(function(response){
            if(response.data.loggedIn !== true) $state.go('login')
        })
        .catch(function(error){
            $state.go('login')
        })
  }
  $ctrl.logout = function(){
      AuthFactory.logout().then(function(response){
          $state.go('home')
      })
      .catch(function(error){
          console.log(error);
      })
  }
};

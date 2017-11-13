
'use strict';
angular.module('admin')
  .component('maLoginForm', {
    bindings: {
        credentials: '<',
        failed: '<',
        onLogin : "&"
    },
    templateUrl : 'maLoginForm.component.html',
    controller : maLoginFormController,
  })

function maLoginFormController(){

};

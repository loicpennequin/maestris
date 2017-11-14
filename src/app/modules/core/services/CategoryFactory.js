
'use strict';

angular.module('core')
  .factory('CategoryFactory', ($http)=>{
      return {
          getAll : function(){
              return $http.get('/api/categories')
                .then(function(response) {
                    return response;
                })
                .catch(function(error){
                    return error
                })
          },
          add : function(post){
              return $http.post('/api/categories', post)
                .then(function(response) {
                    return response;
                })
                .catch(function(error){
                    return error
                })
          }
      }
  });

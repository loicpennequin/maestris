
'use strict';

angular.module('core')
  .factory('PostFactory', ($http)=>{
      return {
          getPosts : function(){
              return $http.get('/api/posts')
                .then(function(response) {
                    return response;
                })
                .catch(function(error){
                    return error
                })
          },
          addPost : function(post){
              return $http.post('/api/posts', post)
                .then(function(response) {
                    return response;
                })
                .catch(function(error){
                    return error
                })
          }
      }
  });

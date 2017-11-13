
'use strict';

angular.module('admin')
  .factory('AuthFactory', ($http)=>{
      return {
          login : function(credentials){
              return $http.post('/api/auth/login', credentials)
                .then(function(response) {
                    return response;
                })
                .catch(function(error){
                    return error
                })
          },
          logout : function(){
              return $http.get('/api/auth/logout')
              .then(function(rersponse){
                  return response
              })
              .catch(function(error){
                  return error
              })
          },
          isLoggedIn : function(){
              return $http.get('/api/auth/isloggedin')
              .then(function(response){
                  return response
              })
              .catch(function(error){
                  return error
              })
          }
      }
  });

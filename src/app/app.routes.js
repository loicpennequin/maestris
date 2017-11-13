angular.module('maestris')
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);
    $stateProvider
      .state('home', {
        url: "/",
        component: "maHome"
      })
      .state('login', {
          url: '/login',
          component: 'maLogin',
      })
      .state('admin', {
          url: '/admin',
          component: 'maControlPanel'
      })
      .state('admin.dashboard', {
          url: '/dashboard',
          component: 'maAdminDashboard'
      })
  });

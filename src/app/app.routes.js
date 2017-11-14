angular.module('maestris')
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise("/");
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
      .state('admin.posts', {
          url: '/articles',
          component: 'maAdminPosts'
      })
      .state('admin.categories', {
          url: '/categories',
          component: 'maAdminCategories'
      })
      .state('admin.comments', {
          url: '/commentaires',
          component: 'maAdminComments'
      })
      .state('admin.images', {
          url: '/images',
          component: 'maAdminImages'
      })
  });

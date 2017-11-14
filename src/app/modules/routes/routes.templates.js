angular.module('routes').run(['$templateCache', function($templateCache) {
    $templateCache.put('maAdminComments.component.html',
        "<div class=\"maAdminComments-component\">\n    <h1>Commentaires</h1>\n</div>\n");
}]);
angular.module('routes').run(['$templateCache', function($templateCache) {
    $templateCache.put('maAdminCategories.component.html',
        "<div class=\"maAdminCategories-component\">\n  <p>{{$ctrl.name}} works!</p>\n</div>");
}]);
angular.module('routes').run(['$templateCache', function($templateCache) {
    $templateCache.put('maAdminDashboard.component.html',
        "<div class=\"maAdminDashboard-component\">\n    <div>Vous avez X nouveaux commentaires</div>\n    <div>Vous avez X nouveaux messages</div>\n    <div>Total articles</div>\n    <div>Total commentaires</div>\n    <div>Total messages</div>\n\n    <div>Dernier article :</div>\n</div>\n");
}]);
angular.module('routes').run(['$templateCache', function($templateCache) {
    $templateCache.put('maAdminImages.component.html',
        "<div class=\"maAdminImages-component\">\n  <p>{{$ctrl.name}} works!</p>\n</div>");
}]);
angular.module('routes').run(['$templateCache', function($templateCache) {
    $templateCache.put('maAdminPosts.component.html',
        "<div class=\"maAdminPosts-component\">\n    <h2>Vos articles</h2>\n    <ma-post-table posts=\"$ctrl.posts\"></ma-post-table>\n    <h2>Nouvel article</h2>\n    <form ng-submit=\"$ctrl.addPost()\">\n        <div class=\"form-control\">\n            <input type=\"test\" ng-model=\"$ctrl.newPost.title\" placeholder=\"Titre de votre article\"/>\n        </div>\n        <div class=\"form-control\">\n            <input type=\"test\" ng-model=\"$ctrl.newPost.summary\" placeholder=\"En-tête de votre article\"/>\n        </div>\n        <div class=\"form-control\">\n            <ma-text-editor model=\"$ctrl.newPost.body\" on-change=\"$ctrl.changeBody(model)\"></ma-text-editor>\n        </div>\n        <div class=\"form-control\">\n            <input type=\"submit\" value=\"Publier l'article\"/>\n        </div>\n    </form>\n</div>\n");
}]);
angular.module('routes').run(['$templateCache', function($templateCache) {
    $templateCache.put('maControlPanel.component.html',
        "<div class=\"maControlPanel-component\">\n    <div class=\"col-left\">\n        <ma-sidebar on-logout=\"$ctrl.logout()\"></ma-sidebar>\n    </div>\n    <div class=\"col-right\">\n        <ui-view></ui-view>\n    </div>\n</div>\n");
}]);
angular.module('routes').run(['$templateCache', function($templateCache) {
    $templateCache.put('maHome.component.html',
        "<div class=\"maHome-component\">\n  <ma-navbar></ma-navbar>\n  <ma-landing-page></ma-landing-page>\n  <ma-articles-list></ma-articles-list>\n  <ma-footer></ma-footer>\n</div>\n");
}]);
angular.module('routes').run(['$templateCache', function($templateCache) {
    $templateCache.put('maLogin.component.html',
        "<div class=\"maLogin-component\">\n    <ma-login-form credentials='$ctrl.credentials' on-login=\"$ctrl.login()\" failed=\"$ctrl.failed\"></ma-login-form>\n</div>\n");
}]);
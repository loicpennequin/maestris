angular.module('routes').run(['$templateCache', function($templateCache) {
    $templateCache.put('maAdminCategories.component.html',
        "<div class=\"maAdminCategories-component\">\r\n  <p>{{$ctrl.name}} works!</p>\r\n</div>");
}]);
angular.module('routes').run(['$templateCache', function($templateCache) {
    $templateCache.put('maAdminDashboard.component.html',
        "<div class=\"maAdminDashboard-component\">\r\n    <div>Vous avez X nouveaux commentaires</div>\r\n    <div>Vous avez X nouveaux messages</div>\r\n    <div>Total articles</div>\r\n    <div>Total commentaires</div>\r\n    <div>Total messages</div>\r\n\r\n    <div>Dernier article :</div>\r\n</div>\r\n");
}]);
angular.module('routes').run(['$templateCache', function($templateCache) {
    $templateCache.put('maAdminComments.component.html',
        "<div class=\"maAdminComments-component\">\r\n    <h1>Commentaires</h1>\r\n</div>\r\n");
}]);
angular.module('routes').run(['$templateCache', function($templateCache) {
    $templateCache.put('maAdminImages.component.html',
        "<div class=\"maAdminImages-component\">\r\n  <p>{{$ctrl.name}} works!</p>\r\n</div>");
}]);
angular.module('routes').run(['$templateCache', function($templateCache) {
    $templateCache.put('maAdminPosts.component.html',
        "<div class=\"maAdminPosts-component\">\r\n    <h2>Vos articles</h2>\r\n    <ma-post-table posts=\"$ctrl.posts\"></ma-post-table>\r\n    <h2>Nouvel article</h2>\r\n    <form ng-submit=\"$ctrl.addPost()\">\r\n        <div class=\"form-control\">\r\n            <input type=\"test\" ng-model=\"$ctrl.newPost.title\" placeholder=\"Titre de votre article\"/>\r\n        </div>\r\n        <div class=\"form-control\">\r\n            <select ng-model=\"$ctrl.newPost.category_id\" ng-options=\"category.id as category.name for category in $ctrl.categories track by category.name\">\r\n                <option value=\"\" disabled>- Choisissez une catégorie -</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"form-control\">\r\n            <input type=\"test\" ng-model=\"$ctrl.newPost.summary\" placeholder=\"En-tête de votre article\"/>\r\n        </div>\r\n        <div class=\"form-control\">\r\n            <ma-text-editor model=\"$ctrl.newPost.body\" on-change=\"$ctrl.changeBody(model)\"></ma-text-editor>\r\n        </div>\r\n        <div class=\"form-control\">\r\n            <input type=\"submit\" value=\"Publier l'article\"/>\r\n        </div>\r\n    </form>\r\n</div>\r\n");
}]);
angular.module('routes').run(['$templateCache', function($templateCache) {
    $templateCache.put('maControlPanel.component.html',
        "<div class=\"maControlPanel-component\">\r\n    <header>\r\n        <h1>Panneau Admin<span><a href=\"#!/\">Retour au site</a></span></h1>\r\n    </header>\r\n    <main>\r\n        <div class=\"col-left\">\r\n            <ma-sidebar on-logout=\"$ctrl.logout()\"></ma-sidebar>\r\n        </div>\r\n        <div class=\"col-right\">\r\n            <ui-view></ui-view>\r\n        </div>\r\n    </main>\r\n</div>\r\n");
}]);
angular.module('routes').run(['$templateCache', function($templateCache) {
    $templateCache.put('maLogin.component.html',
        "<div class=\"maLogin-component\">\r\n    <ma-login-form credentials='$ctrl.credentials' on-login=\"$ctrl.login()\" failed=\"$ctrl.failed\"></ma-login-form>\r\n</div>\r\n");
}]);
angular.module('routes').run(['$templateCache', function($templateCache) {
    $templateCache.put('maHome.component.html',
        "<div class=\"maHome-component\">\r\n  <ma-navbar></ma-navbar>\r\n  <ma-landing-page></ma-landing-page>\r\n  <ma-articles-list></ma-articles-list>\r\n  <ma-footer></ma-footer>\r\n</div>\r\n");
}]);
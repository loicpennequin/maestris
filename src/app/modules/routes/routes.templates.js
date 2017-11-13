angular.module('routes').run(['$templateCache', function($templateCache) {
    $templateCache.put('maAdminDashboard.component.html',
        "<div class=\"maAdminDashboard-component\">\n  <p>{{$ctrl.name}} works!</p>\n</div>\n");
}]);
angular.module('routes').run(['$templateCache', function($templateCache) {
    $templateCache.put('maHome.component.html',
        "<div class=\"maHome-component\">\n  <ma-navbar></ma-navbar>\n  <ma-landing-page></ma-landing-page>\n  <ma-articles-list></ma-articles-list>\n  <ma-footer></ma-footer>\n</div>\n");
}]);
angular.module('routes').run(['$templateCache', function($templateCache) {
    $templateCache.put('maControlPanel.component.html',
        "<div class=\"maControlPanel-component\">\n    <div class=\"col-left\">\n        <ma-sidebar on-logout=\"$ctrl.logout()\"></ma-sidebar>\n    </div>\n    <div class=\"col-right\">\n        <ui-view></ui-view>\n    </div>\n</div>\n");
}]);
angular.module('routes').run(['$templateCache', function($templateCache) {
    $templateCache.put('maLogin.component.html',
        "<div class=\"maLogin-component\">\n    <ma-login-form credentials='$ctrl.credentials' on-login=\"$ctrl.login()\" failed=\"$ctrl.failed\"></ma-login-form>\n</div>\n");
}]);
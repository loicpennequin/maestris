angular.module('layout').run(['$templateCache', function($templateCache) {
    $templateCache.put('maHeader.component.html',
        "<div class=\"maHeader-component\">\r\n  <p>{{$ctrl.name}} works!</p>\r\n</div>");
}]);
angular.module('layout').run(['$templateCache', function($templateCache) {
    $templateCache.put('maFooter.component.html',
        "<div class=\"maFooter-component\">\r\n    &#9400;2017 | <a href=\"#!/login\">Accès administrateur</a>\r\n</div>\r\n");
}]);
angular.module('layout').run(['$templateCache', function($templateCache) {
    $templateCache.put('maLandingPage.component.html',
        "<div class=\"maLandingPage-component\">\r\n  <h1>\r\n      Maestris Cambrai\r\n  </h1>\r\n</div>\r\n");
}]);
angular.module('layout').run(['$templateCache', function($templateCache) {
    $templateCache.put('maNavbar.component.html',
        "<div class=\"maNavbar-component\">\r\n    <ul>\r\n        <li>\r\n            <a href=\"#\">Accueil</a>\r\n        </li>\r\n        <li>\r\n            <a href=\"#\">A propos</a>\r\n        </li>\r\n        <li>\r\n            <a href=\"#\">Articles</a>\r\n        </li>\r\n        <li>\r\n            <a href=\"#\">Archives</a>\r\n        </li>\r\n        <li>\r\n            <a href=\"#\">Contact</a>\r\n        </li>\r\n\r\n    </ul>\r\n</div>\r\n");
}]);
angular.module('layout').run(['$templateCache', function($templateCache) {
    $templateCache.put('maSidebar.component.html',
        "<div class=\"maSidebar-component\">\r\n  <ul>\r\n      <li ng-class=\"{'active':$ctrl.activeSection =='dashboard'}\">\r\n          <a href=\"#!/admin/dashboard\" ng-click=\"$ctrl.activeSection='dashboard'\">\r\n              <i class=\"fa fa-desktop\" aria-hidden=\"true\"></i>Dashboard\r\n          </a>\r\n      </li>\r\n      <li ng-class=\"{'active':$ctrl.activeSection =='articles'}\">\r\n          <a href=\"#!/admin/articles\" ng-click=\"$ctrl.activeSection='articles'\">\r\n              <i class=\"fa fa-list\" aria-hidden=\"true\"></i>Articles\r\n          </a>\r\n      </li>\r\n      <li ng-class=\"{'active':$ctrl.activeSection =='categories'}\">\r\n          <a href=\"#!/admin/categories\" ng-click=\"$ctrl.activeSection='categories'\">\r\n              <i class=\"fa fa-tags\" aria-hidden=\"true\"></i>Catégories\r\n          </a>\r\n      </li>\r\n      <li ng-class=\"{'active':$ctrl.activeSection =='commentaires'}\">\r\n          <a href=\"#!/admin/commentaires\" ng-click=\"$ctrl.activeSection='commentaires'\">\r\n              <i class=\"fa fa-comment-o\" aria-hidden=\"true\"></i>Commentaires\r\n          </a>\r\n      </li>\r\n      <li ng-class=\"{'active':$ctrl.activeSection =='images'}\">\r\n          <a href=\"#!/admin/images\" ng-click=\"$ctrl.activeSection='images'\">\r\n              <i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>Images\r\n          </a>\r\n      </li>\r\n\r\n      <li class=\"logout\">\r\n          <a href=\"#!/\" ng-click=\"$ctrl.onLogout()\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>Deconnexion</a>\r\n      </li>\r\n  </ul>\r\n</div>\r\n");
}]);
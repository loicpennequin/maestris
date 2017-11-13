angular.module('layout').run(['$templateCache', function($templateCache) {
    $templateCache.put('maLandingPage.component.html',
        "<div class=\"maLandingPage-component\">\n  <h1>\n      Maestris Cambrai\n  </h1>\n</div>\n");
}]);
angular.module('layout').run(['$templateCache', function($templateCache) {
    $templateCache.put('maFooter.component.html',
        "<div class=\"maFooter-component\">\n    &#9400;2017 | <a href=\"/login\">Accès administrateur</a>\n</div>\n");
}]);
angular.module('layout').run(['$templateCache', function($templateCache) {
    $templateCache.put('maNavbar.component.html',
        "<div class=\"maNavbar-component\">\n    <ul>\n        <li>\n            <a href=\"#\">Accueil</a>\n        </li>\n        <li>\n            <a href=\"#\">A propos</a>\n        </li>\n        <li>\n            <a href=\"#\">Articles</a>\n        </li>\n        <li>\n            <a href=\"#\">Archives</a>\n        </li>\n        <li>\n            <a href=\"#\">Contact</a>\n        </li>\n\n    </ul>\n</div>\n");
}]);
angular.module('layout').run(['$templateCache', function($templateCache) {
    $templateCache.put('maSidebar.component.html',
        "<div class=\"maSidebar-component\">\n  <ul>\n      <li>\n          <a href=\"#\">Dashboard</a>\n      </li>\n      <li>\n          <a href=\"#\">Articles</a>\n      </li>\n      <li>\n          <a href=\"#\">Commentaires</a>\n      </li>\n      <li>\n          <a href=\"#\">Images</a>\n      </li>\n\n      <li class=\"logout\">\n          <a href=\"/\" ng-click=\"$ctrl.onLogout()\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>Deconnexion</a>\n      </li>\n  </ul>\n</div>\n");
}]);
angular.module('layout').run(['$templateCache', function($templateCache) {
    $templateCache.put('maHeader.component.html',
        "<div class=\"maHeader-component\">\n  <p>{{$ctrl.name}} works!</p>\n</div>");
}]);
angular.module('core').run(['$templateCache', function($templateCache) {
    $templateCache.put('maArticlesList.component.html',
        "<div class=\"maArticlesList-component\">\r\n  <p>{{$ctrl.name}} works!</p>\r\n</div>");
}]);
angular.module('core').run(['$templateCache', function($templateCache) {
    $templateCache.put('maArticleListItem.component.html',
        "<div class=\"maArticleListItem-component\">\r\n  <p>{{$ctrl.name}} works!</p>\r\n</div>");
}]);
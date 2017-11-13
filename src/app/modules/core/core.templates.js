angular.module('core').run(['$templateCache', function($templateCache) {
    $templateCache.put('maArticleListItem.component.html',
        "<div class=\"maArticleListItem-component\">\n  <p>{{$ctrl.name}} works!</p>\n</div>");
}]);
angular.module('core').run(['$templateCache', function($templateCache) {
    $templateCache.put('maArticlesList.component.html',
        "<div class=\"maArticlesList-component\">\n  <p>{{$ctrl.name}} works!</p>\n</div>");
}]);
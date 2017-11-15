angular.module('core').run(['$templateCache', function($templateCache) {
    $templateCache.put('maArticleListItem.component.html',
        "<div class=\"maArticleListItem-component\">\n  <p class=\"post-title\"><strong>{{$ctrl.post.title}}</strong><span>{{$ctrl.post.created_at | date : date : 'EEE d MMM yyyy'}}</span></p>\n  <p class=\"post-summary\">{{$ctrl.post.summary}}</p>\n  <div class=\"post-body\" ng-bind-html=\"$ctrl.post.body\"></div>\n</div>\n");
}]);
angular.module('core').run(['$templateCache', function($templateCache) {
    $templateCache.put('maArticlesList.component.html',
        "<div class=\"maArticlesList-component\">\n  <h2>Nos articles</h2>\n  <ma-article-list-item ng-repeat=\"p in $ctrl.posts\" post=\"p\"></ma-article-list-item>\n</div>\n");
}]);
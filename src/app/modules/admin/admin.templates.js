angular.module('admin').run(['$templateCache', function($templateCache) {
    $templateCache.put('maLoginForm.component.html',
        "<div class=\"maLoginForm-component\">\n    <h1>Identification</h1>\n    <form>\n        <div class=\"form-control\">\n            <label>login</label>\n            <input type=\"text\" ng-model=\"$ctrl.credentials.login\"/>\n        </div>\n        <div class=\"form-control\">\n            <label>mot de passe</label>\n            <input type=\"password\" ng-model=\"$ctrl.credentials.password\"/>\n        </div>\n        <div class=\"form-control\">\n            <button ng-click=$ctrl.onLogin()><i class='fa fa-sign-in'></i> Connexion</button>\n        </div>\n        <p ng-if=\"$ctrl.failed\">*Identifiants incorrects.</p>\n    </form>\n    <a href=\"/\">retour à l'accueil</a>\n</div>\n");
}]);
angular.module('admin').run(['$templateCache', function($templateCache) {
    $templateCache.put('maPostTable.component.html',
        "<div class=\"maPostTable-component\">\n    <table>\n        <thead>\n            <tr>\n                <th>Titre</th>\n                <th>Categorie</th>\n                <th>Date de publication</th>\n                <th>Commentaires</th>\n                <th>Options</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr ng-repeat=\"post in $ctrl.posts\">\n                <td>{{post.title}}</td>\n                <td>{{post.category_name}}</td>\n                <td>{{post.created_at | date : 'EEE d MMM yyyy'}}</td>\n                <td>Soon</td>\n                <td>\n                    <button>Voir</button>\n                    <button>Editer</button>\n                    <button>Supprimer</button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n");
}]);
angular.module('admin').run(['$templateCache', function($templateCache) {
    $templateCache.put('maTextEditor.component.html',
        "<div class=\"maTextEditor-component\">\n      <textarea ui-tinymce=\"$ctrl.tinymceOptions\" ng-model=\"$ctrl.model\" ng-change=\"$ctrl.setPost()\"></textarea>\n</div>\n");
}]);
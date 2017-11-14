'use strict';

//libs
var jquery = require('jquery');
global.$ = global.jQuery = jquery;
require('angular');
require('angular-messages');
require('angular-resource');
require('angular-animate');
require('angular-cookies');
require('@uirouter/angularjs');
require('angular-ui-tinymce');

//main module
require('./app.js');
require('./app.routes.js');
require('./app.config.js');

//modules
require('./modules/admin/admin.js');
require('./modules/admin/services/AuthFactory.js')
require('./modules/admin/admin.templates.js');
require('./modules/admin/components/maPostTable/maPostTable.component.js')
require('./modules/admin/components/maTextEditor/maTextEditor.component.js')
require('./modules/admin/components/maLoginForm/maLoginForm.component.js')
require('./modules/core/core.js');
require('./modules/core/services/PostFactory.js')
require('./modules/core/core.templates.js');
require('./modules/core/components/maArticleListItem/maArticleListItem.component.js')
require('./modules/core/components/maArticlesList/maArticlesList.component.js')
require('./modules/layout/layout.js');
require('./modules/layout/layout.templates.js');
require('./modules/layout/components/maLandingPage/maLandingPage.component.js')
require('./modules/layout/components/maFooter/maFooter.component.js')
require('./modules/layout/components/maNavbar/maNavbar.component.js')
require('./modules/layout/components/maHeader/maHeader.component.js')
require('./modules/layout/components/maSidebar/maSidebar.component.js')
require('./modules/routes/routes.js');
require('./modules/routes/routes.templates.js');
require('./modules/routes/components/maAdminCategories/maAdminCategories.component.js')
require('./modules/routes/components/maAdminImages/maAdminImages.component.js')
require('./modules/routes/components/maAdminComments/maAdminComments.component.js')
require('./modules/routes/components/maAdminPosts/maAdminPosts.component.js')
require('./modules/routes/components/maLogin/maLogin.component.js')
require('./modules/routes/components/maHome/maHome.component.js')
require('./modules/routes/components/maControlPanel/maControlPanel.component.js')
require('./modules/routes/components/maAdminDashboard/maAdminDashboard.component.js')

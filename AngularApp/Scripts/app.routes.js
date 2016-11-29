"use strict";
const login_component_1 = require('./login.component');
const private_component_1 = require('./private.component');
const app_social_login_component_1 = require('./app.social.login.component');
// Define which component should be loaded based on the current URL
exports.routes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'social-login', component: app_social_login_component_1.SocialLoginComponent },
    { path: 'Home', component: private_component_1.PrivateComponent },
];
//# sourceMappingURL=app.routes.js.map
"use strict";
const app_login_component_1 = require('./app.login.component');
const app_private_component_1 = require('./app.private.component');
const app_social_login_component_1 = require('./app.social.login.component');
const app_registration_component_1 = require('./app.registration.component');
// Define which component should be loaded based on the current URL
exports.routes = [
    { path: '', component: app_private_component_1.PrivateComponent },
    { path: 'login', component: app_login_component_1.LoginComponent },
    { path: 'social-login', component: app_social_login_component_1.SocialLoginComponent },
    { path: 'register', component: app_registration_component_1.RegistrationComponent },
    { path: 'home', component: app_private_component_1.PrivateComponent },
];
//# sourceMappingURL=app.routes.js.map
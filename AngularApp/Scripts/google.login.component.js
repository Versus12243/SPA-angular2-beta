"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var authentication_service_1 = require('./authentication.service');
var GLoginComponent = (function () {
    function GLoginComponent(_zone) {
        var _this = this;
        this._zone = _zone;
        this.googleLoginButtonId = "google-login-button";
        this.onLoginInSuccess = function (loggedInUser) {
            _this._zone.run(function () {
                var email = loggedInUser.getBasicProfile().getEmail();
                var auth_token = loggedInUser.getAuthResponse().id_token;
                // Use a service to store authenticate with backend 
                var user = new authentication_service_1.User(email, auth_token);
                localStorage.setItem("user", JSON.stringify(user));
                // Store token in local storage for authentication 
            });
        };
        this.onLoginFailure = function (error) {
            console.log(error);
        };
    }
    GLoginComponent.prototype.ngAfterViewInit = function () {
        // Converts the Google login button stub to an actual button. 
        gapi.signin2.render(this.googleLoginButtonId, {
            'onsuccess': this.onLoginInSuccess,
            'onfailure': this.onLoginFailure,
            'scope': 'profile',
            'theme': 'dark',
            'width': 240,
            'height': 50,
        });
    };
    GLoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: "\n                           <div id=\"google-login-button\" data-onsuccess=\"onSignIn\"></div>\n",
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], GLoginComponent);
    return GLoginComponent;
}());
exports.GLoginComponent = GLoginComponent;
//# sourceMappingURL=google.login.component.js.map
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
const core_1 = require('@angular/core');
const authentication_service_1 = require('./authentication.service');
let SocialLoginComponent = class SocialLoginComponent {
    constructor(_zone) {
        this._zone = _zone;
        this.errorMsg = '';
        this.googleLoginButtonId = "google-login-button";
        this.onLoginInSuccess = (loggedInUser) => {
            this._zone.run(() => {
                var email = loggedInUser.getBasicProfile().getEmail();
                var auth_token = loggedInUser.getAuthResponse().id_token;
                // Use a service to store authenticate with backend 
                // Store token in local storage for authentication 
                var user = new authentication_service_1.User(email, auth_token);
                localStorage.setItem("user", JSON.stringify(user));
            });
        };
        this.onLoginFailure = (error) => {
            this.errorMsg = 'Failed to login';
        };
    }
    ngAfterViewInit() {
        // Converts the Google login button stub to an actual button. 
        gapi.signin2.render(this.googleLoginButtonId, {
            'onsuccess': this.onLoginInSuccess,
            'onfailure': this.onLoginFailure,
            'scope': 'profile',
            'theme': 'dark',
            'width': 200,
            'height': 36,
            'display': 'inline-block'
        });
    }
};
SocialLoginComponent = __decorate([
    core_1.Component({
        selector: 'login-form',
        template: `
        <div class="container">
                <span>{{errorMsg}}</span> 
                <div id="google-login-button" class="g-signin2">
                </div>           
        </div>
    	`
    }), 
    __metadata('design:paramtypes', [core_1.NgZone])
], SocialLoginComponent);
exports.SocialLoginComponent = SocialLoginComponent;
//# sourceMappingURL=app.social.login.js.map
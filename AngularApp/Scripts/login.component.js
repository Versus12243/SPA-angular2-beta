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
let LoginComponent = class LoginComponent {
    constructor(_service) {
        this._service = _service;
        this.user = new authentication_service_1.User('', '');
        this.errorMsg = '';
    }
    login() {
        if (!this._service.login(this.user)) {
            this.errorMsg = 'Failed to login';
        }
    }
};
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-form',
        providers: [authentication_service_1.AuthenticationService],
        template: `
        <div class="container" >
            <div class="title">
                Welcome
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="input-field col s12">
                        <input [(ngModel)]="user.email" id="email" 
                            type="email" class="validate">
                        <label for="email">Email</label>
                    </div>
                </div>
 
                <div class="row">
                    <div class="input-field col s12">
                        <input [(ngModel)]="user.password" id="password" 
                            type="password" class="validate">
                        <label for="password">Password</label>
                    </div>
                </div>
 
                <span>{{errorMsg}}</span>
                <button (click)="login()" 
                    class="btn waves-effect waves-light" 
                    type="submit" name="action">Login</button>
                    <span> or </span>
                    <a routerLink="/social-login" href="/social-login"> Login with social networks </a>
            </div>
        </div>
    	`
    }), 
    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map
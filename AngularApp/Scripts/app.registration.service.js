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
const router_1 = require('@angular/router');
const app_user_service_1 = require('./app.user.service');
let RegistrationService = class RegistrationService {
    constructor(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    registerUser(user) {
        this._userService.createUser(user);
        this._router.navigate(['home']);
    }
};
RegistrationService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [router_1.Router, app_user_service_1.UserService])
], RegistrationService);
exports.RegistrationService = RegistrationService;
//# sourceMappingURL=app.registration.service.js.map
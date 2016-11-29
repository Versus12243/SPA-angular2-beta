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
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}
exports.User = User;
var users = [
    new User('admin@admin.com', 'adm9'),
    new User('user1@gmail.com', 'a23')
];
let UserService = class UserService {
    constructor() {
        this._users = users;
        if (!localStorage.getItem("users"))
            localStorage.setItem("users", JSON.stringify(users));
        else
            this._users = JSON.parse(localStorage.getItem("users"));
    }
    find(user) {
        var authenticatedUser = this._users.find(u => u.email === user.email);
        return authenticatedUser;
    }
    createUser(user) {
        this._users = JSON.parse(localStorage.getItem("users"));
        this._users.push(user);
        localStorage.setItem("users", JSON.stringify(this._users));
    }
};
UserService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=app.user.service.js.map
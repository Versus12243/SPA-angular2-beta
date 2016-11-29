import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

export class User {
    constructor(
        public email: string,
        public password: string) { }
}

var users = [
    new User('admin@admin.com', 'adm9'),
    new User('user1@gmail.com', 'a23')
];

@Injectable()
export class UserService {

    private _users: User[] = users;

    constructor() {
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
}

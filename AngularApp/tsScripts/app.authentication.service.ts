import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './app.user.service';

@Injectable()
export class AuthenticationService {

    constructor(
        private _router: Router, private _userService: UserService) { }

    logout() {
        localStorage.removeItem("user");
        this._router.navigate(['login']);
    }

    login(user) {
        var authenticatedUser = this._userService.find(user);        
        if (authenticatedUser && authenticatedUser.password === user.password) {
            localStorage.setItem("user", JSON.stringify(authenticatedUser));
            this._router.navigate(['home']);
            return true;
        }
        return false;
    }

    checkCredentials() {
        if (localStorage.getItem("user") === null) {
            this._router.navigate(['login']);
        }
    }
}